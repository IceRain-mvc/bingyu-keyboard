let postList = async ctx => {
  let {name, age} = ctx.request.body;
  console.log(name, age);
  ctx.body = {
    msg: 'post test'
  };
};
const deleteById = async ctx => {
  let {userid} = ctx.request.body;

  let res = ctx.db.deleteBy('user', {userid});

  ctx.body = {
    msg: '删除成功',
    code: 1
  }
};

const insertInto = async ctx => {
  let {name, age} = ctx.request.body;

  let res = ctx.db.insert('user', {name, age});

  ctx.body = {
    msg: '新增成功',
    code: 1
  }
};


module.exports = {
  postList, insertInto, deleteById
};
