// let EventEmitter = require('events');

let event = require('./myEvent.js');


// 发布订阅模式  送外卖的 外卖小哥对应 多个用户
// 观察者模式  一对一  一个警察 对应一个小偷


event.on('abc',(msg)=>{
  console.log('abc' + msg);
});
event.on('abc',(msg)=>{
  console.log('abc' + msg);
});

event.on('ac',(msg)=>{
  console.log('ac' + msg);
});

// 通知 上一个代码回调的执行
event.emit('abc', '你好啊'); //
event.emit('ac', '你好啊');
