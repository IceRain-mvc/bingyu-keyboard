let Koa = require('koa');
let childProcess = require('child_process');
let path = require('path');
let app = new Koa();

let assert = require('assert');

let bodyParser = require('koa-bodyparser');
app.use(bodyParser());

// 路由的处理
let KoaRouter = require('koa-router');
// 实例
let router = new KoaRouter();
// 将koaRouter 当做koa中间件
app.use(router.routes());

router.get('/list', async ctx => {
  let {name, age} = ctx.query;
  console.log(name, age);
  ctx.status = 200;// 200+ 成功 300+ 重定向 400+ 客户端错误 500+ 服务器错误
  ctx.body = {
    msg: '来自' + ctx.path + '的请求'
  }
});

router.post('/list', async ctx => {
  let {name, age} = ctx.request.body;//
  console.log(name, age);
  ctx.status = 200;// 200+ 成功 300+ 重定向 400+ 客户端错误 500+ 服务器错误
  ctx.body = {
    msg: '来自' + ctx.path + '的请求'
  }
});


// 最简单的koa hello world
// 处理静态资源
// 中间件编写
// 接口
// 目录的划分
// app.use(async ctx => {
//   let res = await Promise.resolve({name: '小王', age: 20});
//
//   ctx.body = {
//     code: 200,
//     res
//   };
//
// });

// 处理静态资源 中间件
let koaStatic = require('koa-static');
// 使用中间件
app.use(koaStatic(path.join(__dirname, './public')));

let a = '123';
// 断言错误
assert(a, 'this is a test error');

// app.use(function (ctx) {
//   ctx.body = {list: 123}
// });



let port = 3000;
app.listen(port, () => {
  childProcess.exec(`start http://localhost:${port}`);
  process.stdout.write(`server running at  http://localhost:${port}\n`)
});




