#! /usr/bin/env node

// 登录 1
// 注册 2

// let fs = require('fs');
// let path = require('path');

let users = [
  {
    username: '小李',
    password: '123'
  }
];


let count = 0;
let type = '';
let username = '';
let password = '';
process.stdout.write("请选择登录还是注册，登录按1，注册按2：");
process.stdin.on("data", chunk => {
  count++;
  if (count === 1) {

    if (chunk.toString().trim() === '1') {
      // 登录
      type = 1;
      process.stdout.write("请输入用户名：");

    } else if (chunk.toString().trim() === '2') {
      //注册
      type = 2;
      process.stdout.write("请输入用户名：");
    }
  }
  if (count === 2) {
    username = chunk.toString();
    process.stdout.write("请输入用密码：");
  }

  if (count === 3) {
    password = chunk.toString();

    if (type === 1) {
      // 登录 登录成功或者失败
      // console.log('登录成功', username, password);
      let findIndex = users.findIndex(item => item.username.trim() === username.trim());
      if (findIndex !== -1) {
        debugger;
        users[findIndex]['password'] === password.trim() ? process.stdout.write("登录成功") : process.stdout.write("登录失败");
      } else {
        process.stdout.write("登录失败");
      }
    } else if (type === 2) {
      // 注册
      // 注册成功或者失败
      // console.log('注册成功', username, password);

      // fs.readFileSync(__dirname,'./')
      let findIndex = users.findIndex(item => item.username.trim() === username.trim());

      if (findIndex !== -1) {
        process.stdout.write("此用户名已存在");
      } else {
        process.stdout.write("注册成功");
        users.push({username, password})
        console.log(users.toString());
      }
    }
    process.exit();

  }


});

