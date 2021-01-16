let express = require('express');

let ejs = require('ejs');
let fs = require('fs');

let app = express();

app.use(function (req, res, next) {

  let username = '小刚', password = 'xiaogang';
  let users = ['漩涡鸣人', '宇智波佐助', '旗木卡卡西', '纲手', '千手柱间', '千手扉间'];

  // ejs.render 参数 1: html模板  参数2:数据 以对象的形式存在

  let htmlTemplate = fs.readFileSync('./ejsTest.html', 'utf-8');

  let html = ejs.render(htmlTemplate, {username, password,users});

  res.send(html);

});

app.listen(3000);
