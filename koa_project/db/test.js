// let db = require('./connect');
//
// db.query('select * from user', (err, res) => {
//   if (err) {
//     console.log(err);
//     return
//   }
//
//   console.log(res[2].name);
//   console.log(typeof res);// 数组
// });


let {insert, update, deleteBy,execute} = require('./utils');

// insert('user', {name: '小狮子', age: 24}).then(res=>{
//   console.log(res);
// });
//
// insert('user', {name: '小狮子', age: 24}).then(res => {
//   console.log(res);
// });


// update('user', {name: '张无忌', age: 25}, {userid:7}).then(res => {
//   console.log(res);
//   if (res.protocol41) {
//     console.log('更新成功');
//   }
// });

// deleteBy('user', {userid: 7}).then(res => {
//
//   console.log(res);
//   if (res.protocol41) {
//     console.log('删除成功')
//   }
//
// });


// execute('select * from user where userid>3').then(res=>{
//   console.log(res);
// });



// insert(tableName,参数:对象形式{name:'122',age:20})
