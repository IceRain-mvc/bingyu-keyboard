// 解析网页

let cheerio = require('cheerio');

// html 的代码
// 解析html 1. 得到dom节点 $ 是一个方法
let $ = cheerio.load(`
<div class="container">
<h1>你好啊</h1>
<ul>
<li>hahaha</li>
<li>2</li>
<li>3</li>
</ul></div>`);

//2. 解析  选择器

console.log($('.container h1').text());
// console.log($('.container ul>li')['0'].children[0].data);
// console.log($('.container ul>li')['1'].children[0].data);
// console.log($('.container ul>li')['2'].children[0].data);
