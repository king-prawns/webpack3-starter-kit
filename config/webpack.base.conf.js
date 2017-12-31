const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('../package.json');

const ENV = process.env.NODE_ENV;

process.noDeprecation = true;

module.exports = {
  module: {
    rules: [{
      test: /\.html$/,
      loader: 'html-loader'
    },
    {
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      options: pkg.babel
    },
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'eslint-loader'
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 10000
      }
    },
    {
      test: /\.(woff(2)?|eot|ttf|otf)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader',
      query: {
        limit: 10000
      }
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV)
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      inject: true,
    })
  ]
};
