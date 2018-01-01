const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const opn = require('opn');
const config = require('./webpack.dev.conf');

process.env.NODE_ENV = 'dev';

const DEFAULT_HOST = 'localhost';
const DEFAULT_PORT = 8081;
const options = {
  host         : DEFAULT_HOST,
  port         : DEFAULT_PORT,
  contentBase  : 'src',
  hot          : true,
  compress     : true,
  watchOptions : { poll: true },
  inline       : true,
  stats        : 'minimal',
  overlay      : true
};

WebpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, options);

console.log('Starting the dev web server...');
server.listen(DEFAULT_PORT, DEFAULT_HOST, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('WebpackDevServer listening at localhost:', DEFAULT_PORT);
  opn(`http://${DEFAULT_HOST}:${DEFAULT_PORT}`);
});
