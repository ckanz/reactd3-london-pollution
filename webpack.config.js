'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var js_dist = path.join(__dirname, './public');

module.exports = [{
  name: 'chartComponent',
  entry: {
    line: './line.jsx',
  },
  output: {
    path: js_dist,
    filename: "[name].bundle.js",
    publicPath: ".",
  },
  module: {
    loaders: [
      {
        test: [/\.jsx$/],
        loaders: ["jsx-loader?insertPragma=React.DOM&harmony"],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
    }),
  ],
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx']
  }
}];
