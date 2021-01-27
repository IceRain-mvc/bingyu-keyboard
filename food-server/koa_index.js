const app = require('./app');

let childProcess = require('child_process');
let path = require('path');

let assert = require('assert');

let bodyParser = require('koa-bodyparser');
let timeMiddleware = require('./middleware/timeMiddleware');

app.use(timeMiddleware());

app.use(bodyParser());

let router = require('./routes/router_index');


// 将koaRouter 当做koa中间件
app.use(router.routes());


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

// app.use(timelog()) // 通过这个中间件 打印请求的时长 和请求的地址

let a = '123';
// 断言错误
assert(a, 'this is a test error');

// app.use(function (ctx) {
//   ctx.body = {list: 123}
// });


// // 中间件1
// app.use(async (ctx,next) => {
//   console.log(1.1);// 刚接收到请求的那一刻
//   await next(); // 等待响应 时间
//   console.log(1.2) // 响应结束
// });
//
// // 中间件2
// app.use(async (ctx,next) => {
//   console.log(2.1);
//   await next();
//   console.log(2.2)
// });
//
// // 中间件3
// app.use(async (ctx,next) => {
//   console.log(3.1);
//   await next();
//   console.log(3.2)
// });









let port = 4000;
app.listen(port, () => {
  childProcess.exec(`start http://localhost:${port}`);
  process.stdout.write(`server running at  http://localhost:${port}\n`)
});




