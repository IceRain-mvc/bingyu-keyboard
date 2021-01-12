// 1. 类 给别人用  导出
// 2. 实例有两个方法 on(key,传递的参数=>{})  emit(key,传递的参数)
// 3. 每次调用emit 的时候 就寻找哪些地方调用了 on  key也要对应 就会执行回调


class MyEvent {

  constructor() {
    this.__event_list__ = {};
  }

  on(key, callback) {
    // callback 存起来
    // [ {key:[callback,callback,callback]} ]
    // {'abc':[callback,callback,callback],'ac':[callback,callback]}

    if (!this.__event_list__[key]) {// {'abc':[callback]}
      this.__event_list__[key] = [];
    }
    this.__event_list__[key].push(callback);
    // console.log(this.__event_list__);

  }

  emit(key, agrs) {
    //遍历每一个 callback  并且执行

    if (this.__event_list__[key]) {
      this.__event_list__[key].forEach(callback => callback(agrs));
    }
  }
}


module.exports = new MyEvent();


// let myEvent = new MyEvent();
// myEvent.on('abc', (msg) => console.log(11, msg)); // 没有触发on第二个参数的回调
// myEvent.on('abc', (msg) => console.log(22, msg)); // 没有触发on第二个参数的回调
// myEvent.on('ac', (msg) => console.log(33, msg)); // 没有触发on第二个参数的回调
// // myEvent.on('abc',()=>console.log(22)); // 没有触发on第二个参数的回调
// // myEvent.on('abc',()=>console.log(33)); // 没有触发on第二个参数的回调
// // myEvent.on('abc',()=>console.log(44)); // 没有触发on第二个参数的回调
// myEvent.emit('abc', '你好啊'); // 触发了 on第二个参数的回调
// myEvent.emit('ac', '你好啊 ac');
