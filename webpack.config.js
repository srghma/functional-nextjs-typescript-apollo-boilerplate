const { CheckerPlugin } = require('awesome-typescript-loader')
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const path = require('path')

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "[name].js"
  },
  entry: {},
  // Currently we need to add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: ['.ts', '.tsx'],
    plugins: [
      new TsConfigPathsPlugin(/* { configFileName, compiler } */)
    ]
  },

  // Source maps support ('inline-source-map' also works)
  // devtool: 'source-map',

  // Add the loader for .ts files.
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    new CheckerPlugin()
  ]
};
