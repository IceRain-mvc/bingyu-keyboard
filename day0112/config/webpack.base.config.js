/*webpack 基本配置文件  不不论是开发环境还是生产环境 都需要有的配置*/
let path = require('path');
let webpack = require('webpack');

module.exports = {
  output:{
    path: path.join(__dirname, '../build/'),
    filename:'[name].js',
    // libraryTarget: 'umd'
  },

  //'css-loader' 打包css   'style-loader': js的手段 css代码 插入到html的header中
  module:{
    rules:[
      {
        test:/\.(js|jsx)?$/,
        loader: 'babel-loader',
        exclude:/(node_modules|build)/
      },
      {
        test:/.css?$/,
        use: [
          'style-loader', 'css-loader'
        ]
      }
    ]
  },
  plugins:[//process.env production  development
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};


