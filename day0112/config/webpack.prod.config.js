/*生产环境的webpack的配置*/
let merge = require('webpack-merge');

let base = require('./webpack.base.config.js');

module.exports = merge(base, {
  entry:{
    keyboard: ['./src/index.js']
  }
});
