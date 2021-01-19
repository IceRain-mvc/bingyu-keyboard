let WebServerSocket = require('ws');
let fs = require('fs');
let path = require('path');
let ws = new WebServerSocket.Server({
  port: 8000
});
//clients .forEach(item=>item.send())
ws.on('connection', function (client) {//client : 客户端传递过来的socket实例
  console.log('有客到');
  // clients.push(clinet)

  //获取谁发送的
  // console.log(client._socket.remoteAddress());// 线下

  client.on('message', (message) => {
    let {code} = JSON.parse(message);
    console.log(code);
    switch (code) {
      case 0:
        //登录
        // 如果没有这个用户  就注册 如果有 就登录
        let {username, password} = JSON.parse(message);
        //读取用户信息 判断有没有此用户
        let users = fs.readFileSync(path.join(__dirname, './users/userList.json'), 'utf-8');

        //string-->object
        users = JSON.parse(users);
        let findIndex = users.findIndex(item => item.username === username);
        if (findIndex !== -1) {
          if (users[findIndex].password === password) {
            // 给客户端返回登录成功的信息
            client.send(JSON.stringify({
              code: 0,// 注册相关
              success: 1,// 成功  0:失败
              msg: '登录成功'
            }));
          } else {
            // 登录失败 密码错误
            client.send(JSON.stringify({
              code: 0,// 注册相关
              success: 0,// 成功  0:失败
              msg: '登录失败'
            }));
          }

        } else {
          // 没有此账户 注册成功 并登录成功   username: 唯一
          users.push({username, password});
          // 把原来的值 给覆盖掉

          fs.writeFileSync(path.join(__dirname, './users/userList.json'), JSON.stringify(users));
          client.send(JSON.stringify({
            code: 0,// 注册相关
            success: 1,// 成功  0:失败
            msg: '没有此账户 注册成功 并登录成功'
          }));
        }


        break;
      case 1:
      // 发送信息
      default:
      // 其他

    }
  })

  // ws.on('close',()=>{
  //   clients.
  // })
});


