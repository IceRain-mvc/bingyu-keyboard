const path = require('path');


module.exports = {

  devServer:{
    port: 8080,
    open: true,
    proxy:{
      '/api':{//
        target:'http://127.0.0.1:4000',//代理的地址
        pathRewrite:{'^/api': ''},// 路径要重写 打包了之后  /api就不要
        changeOrigin: true // 改变远程 118.89.234.135
      }
    }
  }
};
