//XMLHttpRequest is not defined 在node环境中报错

// let xhr = XMLHttpRequest();
// xhr.open('GET', 'http://dict.youdao.com/w/english' + '/你好', true);
// xhr.send(null);
//
// xhr.onload = function () {
//   console.log(xhr.responseText);
// };


// 如何在node环境中发送请求

let http = require('http');

// get请求
http.get('http://dict.youdao.com/w/english/你好', (res) => {
  // res二进制数据
  // console.log(res);

  // node 环境中 process buffer: 处理二进制的数据的
  let buf = Buffer.alloc(0);// 0:默认大小
  // 读取二进制数据的时候 会有一个过程
  res.on('data', chunk => {
    buf = Buffer.concat([buf, chunk]);
  });

  res.on('end', () => {
    console.log(buf.toString());
  })

});
