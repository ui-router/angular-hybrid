var webpack = require('webpack');
var HtmlWebPackPlugin = require( 'html-webpack-plugin' );
var path = require('path');

module.exports = {
  entry: {
    "app": "./src/app.ts",
  },

  devtool: 'cheap-module-source-map',

  devServer: { open: true },

  output: {
    path: path.resolve(__dirname, "dist"),
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

  plugins: [new HtmlWebPackPlugin({ inject: true, template: 'public/index.html' })]
};
