/*开发环境的webpack的配置*/

// HTMLwebpackplugin
let webpack = require('webpack');
let {merge} = require('webpack-merge');
let base = require('./webpack.base.config.js');
let HtmlWebpackPlugin = require('html-webpack-plugin');


// dev  base

let devConfig = {
  entry: {
    app: ['./src/index.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),// 热更新
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index'
    })
  ],
  devServer: {
    inline: true,
    hot: true,//热更新
    host: '127.0.0.1',
    port: process.env.PORT || 8101,
    historyApiFallback: true// history模式下  刷新不会出现404
  }
};

// webpack-merge webpack 配置的对象融合到一起了

// console.log();

module.exports = merge(base, devConfig);// 开发环境
