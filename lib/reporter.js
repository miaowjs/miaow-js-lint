var stylish = require('eslint/lib/formatters/stylish');

module.exports = function (filePath, messages) {
  console.warn(stylish([
    {
      filePath: filePath,
      messages: messages
    }
  ]));
};
