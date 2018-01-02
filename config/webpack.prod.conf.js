// const path = require('path');
// const utils = require('./utils');
// const webpack = require('webpack');
// const config = require('../config');
// const merge = require('webpack-merge');
// const baseWebpackConfig = require('./webpack.base.conf');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const webpackConfig = merge(baseWebpackConfig, {
//   entry: [
//     './src/main.js'
//   ],
//   module: {
//     rules: [
//       utils.cssRules()
//     ]
//   },
//   devtool : 'source-map',
//   output  : {
//     path          : config.build.distPath,
//     filename      : utils.assetsPath('js/[name].[chunkhash].js'),
//     chunkFilename : utils.assetsPath('js/[id].[chunkhash].js'),
//     publicPath    : config.build.assetsPublicPath
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env': env
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       beautify : false,
//       mangle   : {
//         screw_ie8   : true,
//         keep_fnames : true
//       },
//       compress: {
//         screw_ie8 : true,
//         warnings  : false
//       },
//       comments  : false,
//       sourceMap : true
//     }),
//     new ExtractTextPlugin({
//       filename  : utils.assetsPath('css/[name].[contenthash].css'),
//       disable   : false,
//       allChunks : true
//     }),
//     new HtmlWebpackPlugin({
//       filename : config.build.index,
//       template : 'index.html',
//       title    : 'Webpack 2',
//       inject   : true,
//       minify   : {
//         removeComments        : true,
//         collapseWhitespace    : true,
//         removeAttributeQuotes : true
//       },
//       chunksSortMode: 'dependency'
//     }),
//     // split vendor js into its own file
//     new webpack.optimize.CommonsChunkPlugin({
//       name: 'vendor',
//       minChunks(module, count) {
//         // any required modules inside node_modules are extracted to vendor
//         return (
//           module.resource &&
//           /\.js$/.test(module.resource) &&
//           module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
//         );
//       }
//     }),
//     // extract webpack runtime and module manifest to its own file in order to
//     // prevent vendor hash from being updated whenever app bundle is updated
//     new webpack.optimize.CommonsChunkPlugin({
//       name   : 'manifest',
//       chunks : ['vendor']
//     }),
//     // copy custom static assets
//     new CopyWebpackPlugin([
//       {
//         from   : path.resolve(__dirname, '../static'),
//         to     : config.build.assetsSubDirectory,
//         ignore : ['.*', 'styles/*', 'fonts/*']
//       }
//     ])
//   ]
// });

// module.exports = webpackConfig;
