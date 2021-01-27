// let {execute} = require('../db/utils');
// ctx koa的上下文实例
// ctx.db.insert/update/delete/select
let getList = async ctx => {
  let {userid} = ctx.query;

  ctx.body = {
    msg: 'get test'
  };
};


let getUser = async ctx => {
  // let {userid} = ctx.query;
  // 根据userid查找对应的人
  // 如果没有穿userid就查找所有人

  let sql = `select * from user`;
  ctx.body = await ctx.db.execute(sql);
};

module.exports = {
  getList, getUser
};
