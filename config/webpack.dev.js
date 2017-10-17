var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dev'),
    publicPath: 'http://localhost:9090/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  resolve      : {
      extensions: ['.ts', '.js']
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
});
