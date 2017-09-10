const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const glob = require('glob')

const paths = require('./bin/paths')

module.exports = {
  webpack: config => {
    if (process.env.ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true,
        })
      )
    }

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
        test: /\.(css|scss|sass)/,
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
              includePaths: ['build/styles', 'node_modules']
                .map(d => paths.inRootDir(d))
                .map(g => glob.sync(g))
                .reduce((a, c) => a.concat(c), []),
            },
          },
        ],
      }
    )

    /************************
     * Using Preact instead of React
     ************************/
    // TODO: doesnt work
    // console.log('> Using Preact instead of React');
    // config.resolve.alias = {
    //   react: 'preact-compat',
    //   'react-dom': 'preact-compat',
    // };

    return config
  },
}
