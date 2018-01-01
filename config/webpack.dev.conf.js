const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.conf');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ENTRY = {
  app: './src/index.js'
};
const FILENAME = './app.js';
const SOURCE_MAP = 'cheap-module-eval-source-map';

module.exports = merge(base, {
  entry   : ENTRY,
  devtool : SOURCE_MAP,
  output  : {
    filename   : FILENAME,
    publicPath : '/'
  },
  module: {
    rules: [{
      test : /(\.scss|\.css)$/,
      use  : ExtractTextPlugin.extract({
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader  : 'css-loader', // translates CSS into CommonJS
            options : {
              sourceMap: true
            }
          },
          {
            loader  : 'postcss-loader', // postprocesses CSS
            options : {
              sourceMap : true,
              ident     : 'postcss',
              plugins   : () => [
                autoprefixer()
              ]
            }
          },
          {
            loader: 'resolve-url-loader' // resolves relative paths based on the original source file.
          },
          {
            loader  : 'sass-loader', // compiles Sass to CSS
            options : {
              sourceMap: true
            }
          }
        ]
      })
    }]
  },
  plugins: [
    // see https://webpack.js.org/guides/hot-module-replacement/
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin({
      disable: true
    }),
    new HtmlWebpackPlugin({
      template : 'src/index.ejs',
      title    : 'DEV - Extreme Scaffolding',
      inject   : true
    })
  ]
});
