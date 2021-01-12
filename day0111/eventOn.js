// let Event = require('change-this');
let event = require('./Observe');

event.on('abc', (msg) => {
  console.log('1', msg)
});


event.on('abc', (msg) => {
  console.log('2', msg)
});
