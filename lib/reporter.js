var stylish = require('eslint/lib/formatters/stylish');

module.exports = function (filePath, messages) {
  var output = stylish([
    {
      filePath: filePath,
      messages: messages
    }
  ]);

  output && console.warn(output);
};
