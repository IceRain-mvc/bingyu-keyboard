# 键盘组件

声明性质的东西

编译通过没有

测试覆盖率

作者

版本

....

## 功能

- 可以实现数组键盘
- 可以自定义样式
- 可以实现键盘的切换 
  - 带小数点
  - 纯数字
  - 身份证
- 效果图

## 使用

2. Native javascript 

   ```html
   <script src='http://xxx.cn'></script>
   ```

   ```js
   xxxx
   ```
   
2. vue/react 怎么用

      ```bash
   npm install bingyu-keyboard
   ```

3. 具体使用

   ```jsx
   import KeyBoard from 'bingyu-keyboard'
   回调(msg){
       msg:输入的信息
   }
   new KeyBoard({
       el:容器,//container
       className:样式
       inputValue:回调,
       type:['']
   })
   
   <div ref='container'></div>
   ```

## 不足

改善...

