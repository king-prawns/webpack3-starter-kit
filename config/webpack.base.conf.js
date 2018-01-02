const webpack = require('webpack');
const pkg = require('../package.json');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const ENV = process.env.NODE_ENV;

process.noDeprecation = true;

module.exports = {
  module: {
    rules: [{
      test : /\.html$/,
      use  : {
        loader: 'html-loader'
      }
    },
    {
      enforce : 'pre',
      test    : /\.js$/,
      exclude : /node_modules/,
      use     : {
        loader: 'eslint-loader'
      }
    },
    {
      test    : /\.js?$/,
      exclude : /node_modules/,
      use     : {
        loader  : 'babel-loader',
        options : pkg.babel
      }
    },
    {
      test    : /\.(woff(2)?|eot|ttf|otf|png|jpe?g|gif|svg)$/,
      loader  : 'url-loader',
      options : {
        limit: 10000
      }
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV)
    }),
    new StyleLintPlugin()
  ]
};
