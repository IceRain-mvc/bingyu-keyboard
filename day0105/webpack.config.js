let path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main[hash].js',
    path: path.join(__dirname, 'dist')
  }
};
