'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var js_dist = path.join(__dirname, './public');

module.exports = [{
  name: 'chartComponent',
  entry: {
    line: './index.js',
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
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react']
            }
          },
        ],
      },
    ]
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
