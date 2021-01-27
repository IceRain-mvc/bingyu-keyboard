let jwt = require('jsonwebtoken');

const login = async (ctx) => {

  let {username, password} = ctx.request.body;
  let users = await ctx.db.execute(`select * from user where username='${username}'`);

  if (users.length !== 0) {
    //找到了
    if (users[0].password === password) {
      // 验签
      let token = jwt.sign({username, password}, ctx.key, {
        expiresIn: '12h' // 30天  30y  20年  30h 30小时
      });

      ctx.body = {
        code: 1,
        msg: '登录成功',
        token
      };
    } else {
      ctx.body = {
        code: -1,
        msg: '登录失败',
      };
    }

  }

};

module.exports = {
  login
};
