let event = require('change-this');

// function change() {
//   // console.log(process);
//   console.log(this);// node环境中打印的是process   浏览器环境打印的是 window
//
// }
//
// change.myCall({a: 10});
//


console.log('程序开始 测试内部process 就记录了程序运行过程的所有信息');

//获取当前工作目录
console.log(process.cwd());  // D:\share\2003A\node_advanced\code

console.log('进程还没结束 等待一个演示器');

// process.abort();

setTimeout(() => {
  console.log('进程结束了');
}, 5000);


event.on('abcd', (msg) => console.log('abcd', msg));
event.on('abcd', (msg) => console.log('abcd', msg));
event.on('abcd', (msg) => console.log('abcd', msg));
event.emit('abcd', '你好啊 abcd');
