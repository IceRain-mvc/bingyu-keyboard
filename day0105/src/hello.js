// export default {
//   a: 10, b: 20
// }

// require('./index');


function bb(...args) {
  console.log(this, args);
  return 'bbbb';
}

console.log(bb.myCall({b: 123}));
