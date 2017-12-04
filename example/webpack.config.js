var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    "app": "./src/main.ts",
  },

  devtool: 'cheap-module-source-map',

  output: {
    path: path.join(__dirname, "_bundles"),
    publicPath: '_bundles/',
    filename: "[name].js",
  },

  resolve: {
    extensions: ['.js', '.ts']
  },

  module: {
    rules: [
      { test: /\.tsx?$/,  use: [ "ts-loader" ] },
    ]
  },

  externals: {
    angular: 'angular',
  }
};
