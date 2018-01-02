const path = require('path');
const webpack = require('webpack');
const ora = require('ora');
const fs = require('fs-extra');
const chalk = require('chalk');
const config = require('./webpack.prod.conf');

process.env.NODE_ENV = 'prod';

const spinner = ora('I am building...');
spinner.start();
fs.remove(path.resolve(__dirname, '../dist'), (err) => {
  if (err) {
    throw err;
  }
  webpack(config, (werr, stats) => {
    spinner.stop();
    if (werr) {
      throw werr;
    }
    process.stdout.write(`${stats.toString({
      colors       : true,
      modules      : false,
      children     : false,
      chunks       : false,
      chunkModules : false
    })}\n\n`);

    console.log(chalk.cyan('  Build complete.\n'));
    console.log(chalk.yellow('  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'));
  });
});
