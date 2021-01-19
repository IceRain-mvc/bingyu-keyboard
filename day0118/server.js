#! /usr/bin/env node

let express = require('express');

let app = express();

let fs = require('fs');
let path = require('path');

let ejs = require('ejs');

let {program} = require('commander');
// 子进程 .exec('命令')
// node中自带的模块
let childProcess = require('child_process');

program.version('1.0.0').option('-p,--port <str>', '端口号');

program.parse(process.argv);

// 将当前目录作为静态资源地址
app.use(express.static(process.cwd()));

// 开启一个服务器

app.use(function (req, res, next) {
  // 1. 路径拿到 <a href='/day0116'>
  // 文件所在的绝对路径
  let pathname = path.join(process.cwd(), req.path);
  // 2. 读取并展示文件 fs  如果文件存在 就读取
  if (fs.existsSync(pathname)) {
    // 读取文件所在的目录
    let fileList = fs.readdirSync(pathname, 'utf-8');
    //console.log(fileList);//数组

    // 3. 读取ejs模板引擎所在的文件
    let ejsHtml = fs.readFileSync(path.join(__dirname, './anywhere.html'), 'utf-8');
    // 4. 展示 ejs模板引擎
    let htmlFile = ejs.render(ejsHtml, {filename: req.path, fileList});
    res.send(htmlFile);
  } else {
    let html = fs.readFileSync(path.join(__dirname, './404.html'), 'utf-8');
    res.headers = {
      'Content-Type': 'text/html'
    };
    res.send(html);
  }

});

// 开启一个端口号  anywhere -p 8080

const options = program.opts();
console.log(options.port);

app.listen(options.port || 3000, () => {
  process.stdout.write(`Running at http://localhost:${options.port || 3000}`);

  // 打开浏览器
  if (process.platform === 'win32') {
    // win
    childProcess.exec(`start http://localhost:${options.port || 3000}`);

  } else if (process.platform === 'darwin') {
    // mac
    childProcess.exec(`open http://localhost:${options.port || 3000}`);

  }

});// -p  3 端口
