let Router = require('koa-router');

let router = new Router();

let routerConfig = require('./router-config');

// router.get('/list',ctx=>{})

routerConfig.map(item => {
  //item 代表的是谁
  let cb = item.method === 'GET' ? router.get : router.post;

  if (Array.isArray(item.callback)) {
    // console.log(item.callback);
    cb.call(router, item.url, ...item.callback);
  } else {
    cb.call(router, item.url, item.callback);

  }
  //cb(item.url,item.callback)
});


module.exports = router;
