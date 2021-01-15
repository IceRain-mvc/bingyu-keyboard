#! /usr/bin/env node


console.log(process.argv);

let {program} = require('commander');

// 设置版本
program.version('1.0.1');
// 设置参数格式
program
  .description('this is a  translate util')
  .option('-w,--word <str>', '想要查找的单词');
// 解析参数
program.parse(process.argv);

if (program.word) {
  console.log(program);
}
