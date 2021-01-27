let jwt = require('jsonwebtoken');

const login = (ctx) => {

  let {username, password} = ctx.request.body;

  // 验签
  let token = jwt.sign({username, password},ctx.key,{
    expiresIn: '30d' // 30天  30y  20年  30h 30小时
  });

  ctx.body = {
    token
  }


};

module.exports = {
  login
};
