// es6的代码
// jsx的语法
// vue的语法

console.log(111);

let aaa = () => {
  console.log(222);
};

aaa();

class Person {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}

new Person('张三').sayName();
