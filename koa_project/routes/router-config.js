let {postList} = require('../methods/postList');
let {getList, getUser} = require('../methods/getList');

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
    callback: getUser
  },
];
