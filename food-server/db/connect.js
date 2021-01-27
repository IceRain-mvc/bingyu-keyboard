let {createPool} = require('mysql');

let connect = createPool({
  host: 'localhost',
  user: 'root',
  password: 'rootroot',
  port: 3306,
  database:'food'
});
module.exports = connect;
