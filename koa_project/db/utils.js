let db = require('./connect');
// 删 和 改
const insert = (tableName, params) => {
  // params {name:'小李',age:20}
  // insert into 表名 (键名1,键名2,键名3,...) values ('值1',值2,值3,...)
  // 解析参数
  let keys = Object.keys(params);
  let values = keys.map(item => {
    if (typeof params[item] === 'string') {
      return `'${params[item]}'`;
    }
    return params[item];
  }).join(',');
  keys = keys.map(item => '`' + `${item}` + '`').join(',');
  return execute(`insert into ${tableName} (${keys}) values (${values})`);
};


// {userid:10}  针对where 只考虑 等号情况 其余情况 放到execute 执行
const update = (tableName, params, where) => {
  // update 表名 set name='小王',age=30 where userid=12 and
  // console.log(`update ${tableName} set ${convert(params)} where ${convert(where, true)}`);
  return execute(`update ${tableName} set ${convert(params)} where ${convert(where, true)}`);
};


// 删所有
// 删某固定条数  有条件
const deleteBy = (tableName, where) => {
  // update 表名 set name='小王',age=30 where userid=12 and
  // console.log(`update ${tableName} set ${convert(params)} where ${convert(where, true)}`);
  return where ?
    execute(`delete from ${tableName} where ${convert(where, true)}`) :
    execute(`delete from ${tableName}`);
};


const convert = (params, isWhere) => {
  // {name:1212,age:121,xxx:123}
  // name='1212',age=121,xxx=123
  return Object.keys(params).map(item => {
    if (params[item]) {
      if (typeof params[item] === 'string') {
        return `${item}='${params[item]}'`;
      }
      return `${item}=${params[item]}`;
    }
  }).join(isWhere ? ' and ' : ',');
};

const execute = sql => {
  return new Promise((resolve, reject) => {
    db.query(sql, (err, res) => err ? reject(err) : resolve(res));
  })
};


module.exports = {
  insert, execute, deleteBy, update//query,,execute
};
