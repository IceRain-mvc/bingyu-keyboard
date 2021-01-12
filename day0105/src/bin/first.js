#!/usr/bin/env node


let count = 0;
console.log("hello Am 人生第一次可执行程序");

process.stdout.write('请输入用户名：');
process.stdin.on('data', chunk => {
  count++;
  if (count >= 2) {
    process.exit();
  }
  process.stdout.write('请输入密码：');
});
