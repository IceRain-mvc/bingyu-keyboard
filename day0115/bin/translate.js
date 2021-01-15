// 翻译 可以不用commander  anywhere -p 8999

let cheerio = require('cheerio');

function getRequest(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      // res二进制数据
      // console.log(res);
      // node 环境中 process buffer: 处理二进制的数据的
      let buf = Buffer.alloc(0);// 0:默认大小
      // 读取二进制数据的时候 会有一个过程
      res.on('data', chunk => {
        buf = Buffer.concat([buf, chunk]);
      });

      res.on('end', () => {
        resolve(buf.toString())
      })
    });
  })
}

function language(str) {

  let pattern = new RegExp("[\u4E00-\u9FA5]+");

  var pattern2 = new RegExp("[A-Za-z]+");

  if (pattern.test(str)) {
    return 'zh';
  } else if (pattern2.test(str)) {
    return 'en';
  } else {
    return '火星语'
  }

}


let requestObj = {
  'zh': function (word) {
    console.log('中文');
  },
  'en': function (word) {
    console.log('英文');
  }
};


if (process.argv[2]) {
  // 中文 请求的中文的地址  zh
  // 英文 请求的是英文的api en
  let type = language(process.argv[2]);

  // 策略模式
  requestObj[type] && requestObj[type](process.argv[2]);

}
