var CopyWebpackPlugin = require('copy-webpack-plugin')
const glob = require('glob')

const paths = require('./server/paths')

module.exports = {
  webpack: config => {
    /************************
     * Copy assets from /app to /build saving directory structure
     ************************/
    const assets_ext = ['gql', 'png', 'ico', 'scss']
    const patterns = assets_ext.map(function(ext) {
      return {
        context: paths.appPath,
        from: `**/*.${ext}`,
        to: paths.buildPath,
      }
    })
    config.plugins.push(new CopyWebpackPlugin(patterns, { debug: 'info' }))

    /************************
     * Component relative images in /build
     ************************/
    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        // using emit-file-loader just to shut up 'Cannot find module',
        // it will make copy of image in component directory
        {
          loader: 'emit-file-loader',
          options: {
            name: 'dist/[path][name].[ext]',
          },
        },
        // this will create image copy, that we will use,
        // output path - '/.next/static/longhash.png'
        // url - '/_next/static/longhash.png'
        {
          loader: 'url-loader',
          options: {
            outputPath: 'static/',
            publicPath: '/_next/',
            limit: 1000,
          },
        },
        {
          loader: 'image-webpack-loader',
          options: {
            gifsicle: {
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 7,
            },
            pngquant: {
              quality: '65-90',
              speed: 4,
            },
            mozjpeg: {
              progressive: true,
              quality: 65,
            },
          },
        },
      ],
    })

    /************************
     * Styles in /build
     ************************/
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]',
        },
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader'],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'babel-loader',
          'raw-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                'build/styles',
                'node_modules'
              ]
                .map(d => paths.inRootDir(d))
                .map(x => { console.log(x); return x })
                .map(g => glob.sync(g))
                .map(x => { console.log(x); return x })
                .reduce((a, c) => a.concat(c), []),
            },
          },
        ],
      }
    )

    return config
  },
}
