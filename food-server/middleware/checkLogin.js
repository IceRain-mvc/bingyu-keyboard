let jwt = require('jsonwebtoken');

// jwt.sign() 加签  verify()验签

module.exports = function () {
  // localStorage
  return async (ctx, next) => {
    // 1. 取出token
    // 2. 验证
    //    验证通过  正常返回数据
    //    验证不通过  返回401
    // 没有token 返回401

    let token = ctx['headers']['token'];
    if (token) {
      // 验证
      try {
        jwt.verify(token, ctx.key);
        ctx.status = 200;
        // ctx.body = {
        //   code: 1,
        //   msg:'验证成功'
        // }
        return await next();// 下一个中间件就不执行了
      } catch (e) {
        ctx.status = 401;
        return ctx.body = {
          code: -1,
          msg: 'token验证失败'
        }
      }
      // ctx.

    } else {
      ctx.status = 401;// 未授权

      return ctx.body = {
        code: -1,
        msg: '请求时请携带token'
      }
    }
  };
};
