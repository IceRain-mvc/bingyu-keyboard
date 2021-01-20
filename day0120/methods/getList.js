let getList = async ctx => {
  let {name, age} = ctx.query;
  console.log(name, age);
  ctx.body = {
    msg: 'get test'
  };
};

module.exports = {
  getList
};
