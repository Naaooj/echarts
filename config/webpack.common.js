var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var helpers = require('./helpers');

module.exports = {
  entry: {
    'app': './src/index.js'
  },
  resolve: {
    extensions: [".js"]
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: "babel-loader", exclude: /node_modules/},
      {test: /\.ts/, loaders: 'ts-loader', exclude: /node_modules/},
      {test: /\.html$/, loader: 'html-loader'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
       template: "./src/index.html",
       minify: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app']
    }),
    new webpack.ProvidePlugin({
      echarts: "echarts"
    }),
  ]
};
