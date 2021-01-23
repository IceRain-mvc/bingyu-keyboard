/*
* 将一些常用的实例 提到全局
*
* 比如 db
*
*
* app:koa的实例
* app.context.db = {方法}
*
*
* 这样就可以使用ctx.db.方法
*
*
* */
const {execute, insert, deleteBy, update} = require('./db/utils');

const Koa = require('koa');

const app = new Koa();

app.context.db = {
  execute, insert, deleteBy, update
};

module.exports = app;



