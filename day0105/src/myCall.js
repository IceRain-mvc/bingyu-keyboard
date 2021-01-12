
Function.prototype.myCall = function (target, ...args) {
  //改变函数的拥有者  就可以改变函数的this指向
  let func = this; // a
  // symbol
  let caller = Symbol('caller');
  target[caller] = func;
  let res = target[caller](...args);
  delete target[caller];
  return res;
};
