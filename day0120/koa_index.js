let Koa = require('koa');
let childProcess = require('child_process');
let path = require('path');
let app = new Koa();

let assert = require('assert');

let bodyParser = require('koa-bodyparser');
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


let port = 3000;
app.listen(port, () => {
  childProcess.exec(`start http://localhost:${port}`);
  process.stdout.write(`server running at  http://localhost:${port}\n`)
});




