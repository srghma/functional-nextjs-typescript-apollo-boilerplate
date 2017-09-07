var CopyWebpackPlugin = require('copy-webpack-plugin');

const paths = require('./server/paths')

module.exports = {
  webpack: config => {
    // Copy assets to build directory
    const pattern = {
      context: paths.appPath,
      from: `**/*.gql`,
      to: paths.buildPath,
    }
    config.plugins.push(
      new CopyWebpackPlugin([
        pattern
      ], {
        debug: 'info'
      })
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
