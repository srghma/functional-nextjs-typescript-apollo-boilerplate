var CopyWebpackPlugin = require('copy-webpack-plugin');

const paths = require('./paths')

module.exports = {
  webpack: config => {
    // Copy component relative assets to build directory saving their paths
    const assets_ext = ['gql', 'png']
    const patterns = assets_ext.map(function (ext) {
      return {
        context: paths.appPath,
        from: `**/*.${ext}`,
        to: paths.buildPath,
      }
    })
    config.plugins.push(
      new CopyWebpackPlugin(patterns, { debug: 'info' })
    )

    // Image task to use images in component directory
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

    return config
  },
}
