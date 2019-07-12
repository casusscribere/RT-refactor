const path = require('path');

module.exports = {
  entry: './src/fortyk.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};