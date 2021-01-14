#! /usr/bin/env node

let fs = require('fs');
let path = require('path');
let count = 0;

// 根路径
let pathRoot = process.cwd();

// console.log(process.cwd());


function dirTree(pathParams) {
  // 文件夹 还是文件

  if (fs.statSync(pathParams).isDirectory()) {

    //文件夹
    // 生成分隔符  |--
    process.stdout.write(markT(count) + path.parse(pathParams).base + '\n');
    count++;//0

    //子路径
    let dirsList = fs.readdirSync(pathParams);

    dirsList.forEach(item => dirTree(path.join(pathParams, item)));
    count--;
  } else {
    //文件
    process.stdout.write(markT(count) + path.parse(pathParams).base + '\n')
  }
}

/**
 * 生成分隔符
 */
function markT(index) {
  if (index === 0) {
    return ''
  }
  let str = '';

  for (let i = 0; i < index; i++) {
    str += '|--'
  }
  return str;
}

//生成目录
dirTree(pathRoot);
