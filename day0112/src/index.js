// es6的代码
// jsx的语法
// vue的语法

import './index.css'

import KeyBoard from './KeyBoard';


function inputValue(msg) {
  document.getElementById('value').innerHTML = msg;
}


let keyboard = new KeyBoard({
  el: document.getElementById('app'),
  inputValue,
  type:'integer'// 数字键盘  idcard 身份证  dian带小数点
});
//keyBoard .属性 和 方法
