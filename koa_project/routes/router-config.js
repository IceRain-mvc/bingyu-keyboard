let {postList} = require('../methods/postList');
let {getList} = require('../methods/getList');

module.exports = [
  {
    url:'/list',
    method:'GET',
    callback: getList
  },

  {
    url:'/list',
    method:'POST',
    callback: postList
  },
];
