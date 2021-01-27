const defaultOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  body: {}
};

let isDev = process.env.NODE_ENV === 'development';

const request = (url, options) => {

  options = Object.assign(defaultOptions, options);
  options.body = JSON.stringify(options.body);
  options.method === 'GET' && delete options.body;
  options.headers['token'] = localStorage.getItem('token');
  // console.log(typeof options.body);
  // console.log(options);
  return new Promise((resolve, reject) => {
    // h5之后
    fetch(isDev ? ('/api' + url) : url, options).then(res => {
      if (res.ok) {
        //把数据转换成json格式
        return res.json()
      }
    }).then(res => {
      resolve(res);
    }).catch(err => reject(err));
  })
};


export default request;
