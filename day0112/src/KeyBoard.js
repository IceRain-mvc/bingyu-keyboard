class KeyBoard {
  constructor(options = {}) {
    this.value = '';// 输入的内容
    this.options = {
      type: 'integer'
    };

    // 合并成一个配置项
    let res = Object.assign(this.options, options);
    console.log(res);

    this.init(res);
  }


  init(options) {

    // 根据type 处理 键盘
    this.initKey(options.type);// 3种值

    // 键盘渲染出来
    this._renderKeyboard(options.el);

  }

  initKey(type) {
    let typeKey = {};
    switch (type) {
      case 'integer':
        // 左下角变成 清空
        typeKey = {
          content: '清空',
          action: 'clear'
        };
        break;
      case 'idCard':
        typeKey = {
          content: 'X',
          action: 'value'
        };

        break;
      default:
        typeKey = {
          content: '.',
          action: 'value'
        };

        break;

    }

    this.items = [
      {
        content: '1',
        action: 'value',
      },
      {
        content: '2',
        action: 'value',
      },
      {
        content: '3',
        action: 'value',
      },
      {
        content: '4',
        action: 'value',
      },
      {
        content: '5',
        action: 'value',
      },
      {
        content: '6',
        action: 'value',
      },
      {
        content: '7',
        action: 'value',
      },
      {
        content: '8',
        action: 'value',
      }, {
        content: '9',
        action: 'value',
      }, typeKey, {
        content: '0',
        action: 'value',
      }, {
        content: '&larr;',
        action: 'value',
      },
    ];

  }

  _renderKeyboard(container) {
    let keyboards = this.items.map(item => {
      return `<button>${item.content}</button>`
    });
    let oBox = document.createElement('div');

    oBox.innerHTML = keyboards.join('');
    // 事件
    oBox.addEventListener('touchend',(e)=>{

      let value = e.target.innerHTML;

      // console.log(value)
      if (value === '清空') {
        this.value = '';
      }else if (value === '←') {
        //删除 最后一个
        this.value = this.value.slice(0, this.value.length - 1);
      } else {
        this.value += value;
      }

      this.options.inputValue(this.value);

    });// onclick : 300ms延时

    container.appendChild(oBox);


  }

}


export default KeyBoard;
