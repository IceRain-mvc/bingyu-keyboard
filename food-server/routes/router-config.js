let {postList, insertInto, deleteById} = require('../methods/postList');
let {getList, getUser} = require('../methods/getList');
let {login} = require('../methods/user');
let checkLogin = require('../middleware/checkLogin');

module.exports = [
  {
    url: '/list',
    method: 'GET',
    callback: getList
  },

  {
    url: '/list',
    method: 'POST',
    callback: postList
  }, {
    url: '/user',
    method: 'GET',
    callback: [checkLogin(),getUser] // checkLogin 中间件只针对getUser 接口
  },
  {
    url: '/deleteById',
    method: 'POST',
    callback: [checkLogin(),deleteById]// 没有token 就不能删
  },
  {
    url: '/add',
    method: 'POST',
    callback: insertInto
  }, {
    url: '/login',
    method: 'POST',
    callback: login
  }
];
