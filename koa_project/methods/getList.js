let {execute} = require('../db/utils')

let getList = async ctx => {
  let {name, age} = ctx.query;
  console.log(name, age);
  ctx.body = {
    msg: 'get test'
  };
};


let getUser = async ctx => {
  let users  = await execute('select * from user');
  ctx.body = users;
};

module.exports = {
  getList, getUser
};
