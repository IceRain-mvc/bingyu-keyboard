module.exports = function () {
  return async (ctx, next) => {
    // 请求的时长 打印 结束的时间-开始的时间
    let startTime = new Date().getTime();
    await next();
    let endTime = new Date().getTime();
    let time = (endTime - startTime) / 1000; // 毫秒数
    console.log(`本次的请求接口地址为${ctx.url},请求的方式${ctx.method},总共耗时${time}ms`)
  };
};
