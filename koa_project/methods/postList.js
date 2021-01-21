let postList = async ctx => {
  let {name, age} = ctx.request.body;
  console.log(name, age);
  ctx.body = {
    msg: 'post test'
  };
};

module.exports = {
  postList
};
