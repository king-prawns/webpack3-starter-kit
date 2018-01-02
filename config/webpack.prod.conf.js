const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.conf');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const ENTRY = {
  app: './src/index.js'
};
const SOURCE_MAP = 'source-map';
const TITLE = 'Extreme Scaffolding';

module.exports = merge(base, {
  entry   : ENTRY,
  devtool : SOURCE_MAP,
  output  : {
    path          : path.resolve(__dirname, '../dist'),
    publicPath    : '/',
    filename      : path.posix.join('', 'js/[name].[chunkhash].js'),
    chunkFilename : path.posix.join('', 'js/[id].[chunkhash].js')
  },
  module: {
    rules: [{
      test : /(\.scss|\.css)$/,
      use  : ExtractTextPlugin.extract({
        use: [
          {
            loader  : 'css-loader', // translates CSS into CommonJS
            options : {
              minimize  : true,
              sourceMap : true
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
    new webpack.optimize.UglifyJsPlugin({
      beautify : false,
      mangle   : {
        screw_ie8   : true,
        keep_fnames : true
      },
      compress: {
        screw_ie8 : true,
        warnings  : false
      },
      comments  : false,
      sourceMap : true
    }),
    new ExtractTextPlugin({
      filename  : path.posix.join('', 'css/[name].[contenthash].css'),
      disable   : false,
      allChunks : true
    }),
    new HtmlWebpackPlugin({
      filename : path.resolve(__dirname, '../dist/index.html'),
      template : 'src/index.ejs',
      favicon  : 'favicon.ico', // or use favicons-webpack-plugin
      title    : TITLE,
      minify   : {
        removeComments        : true,
        collapseWhitespace    : true,
        removeAttributeQuotes : true
      },
      chunksSortMode: 'dependency'
    }),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
        );
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name   : 'manifest',
      chunks : ['vendor']
    }),
    // copy assets and manifest.json
    new CopyWebpackPlugin([
      {
        from   : path.resolve(__dirname, '../src/assets'),
        to     : 'assets',
        ignore : ['.*', 'styles/*', 'fonts/*']
      },
      {
        from : path.resolve(__dirname, '../src/manifest.json'),
        to   : ''
      }
    ])
  ]
});
