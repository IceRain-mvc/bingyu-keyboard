let db = require('./connect');

db.query('select * from user', (err, res) => {
  if (err) {
    console.log(err);
    return
  }

  console.log(res[2].name);
  console.log(typeof res);// 数组
});
