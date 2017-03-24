// <package>/../../src/ is copied to <package>/src
// This config is then copied to <package>/src/webpack.config.js

var pkg = require('./package.json');
var banner = pkg.description + '\n' +
    '@version v' + pkg.version + '\n' +
    '@link ' + pkg.homepage + '\n' +
    '@license MIT License, http://www.opensource.org/licenses/MIT';

var webpack = require('webpack');
module.exports = {
  entry: {
    "ng1-to-ng2": "./ng1-to-ng2.ts",
    "ng1-to-ng2.min": "./ng1-to-ng2.ts",
  },

  output: {
    path: __dirname,
    filename: "[name].js",
    libraryTarget: "umd",
    library: "ui-router-ng1-to-ng2",
    umdNamedDefine: true,
  },

  devtool: 'source-map',

  resolve: {
    modulesDirectories: ['../../../node_modules'],
    extensions: ['', '.js', '.ts']
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/, minimize: true
    }),
    new webpack.BannerPlugin(banner)
  ],

  module: {
    loaders: [
      { test: /\.ts$/, loader: "awesome-typescript-loader" }
    ]
  },

  ts: {
    compilerOptions: {
      declaration: false
    }
  },

  externals: {
    "angular": { root: 'angular', amd: 'angular', commonjs2: 'angular', commonjs: 'angular' },
    "angular-ui-router": { root: 'angular-ui-router', amd: 'angular-ui-router', commonjs2: 'angular-ui-router', commonjs: 'angular-ui-router' },
    "ui-router-ng2": { root: 'ui-router-ng2', amd: 'ui-router-ng2', commonjs2: 'ui-router-ng2', commonjs: 'ui-router-ng2' },
    "ui-router-rx": { root: 'ui-router-rx', amd: 'ui-router-rx', commonjs2: 'ui-router-rx', commonjs: 'ui-router-rx' },
    "@angular/core": { root: '@angular/core', amd: '@angular/core', commonjs2: '@angular/core', commonjs: '@angular/core' },
    "@angular/common": { root: '@angular/common', amd: '@angular/common', commonjs2: '@angular/common', commonjs: '@angular/common' }
  },

};
