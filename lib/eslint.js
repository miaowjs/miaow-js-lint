var _ = require('lodash');
var linter = require('eslint').linter;
var RcLoader = require('rcloader');

var reporter = require('./reporter');

function lint(option, cb) {
  var rcLoader = new RcLoader('.eslintrc');

  rcLoader.for(this.srcAbsPath, function (err, opts) {
    var messages = linter.verify(
      this.contents.toString(),
      _.extend({}, opts || {}, option.config || {})
    );

    messages = messages.map(function (message) {
      return _.pick(message, ['line', 'column', 'message', 'ruleId', 'severity', 'fatal']);
    });

    reporter(this.srcPath, messages);

    cb();
  }.bind(this));
}

module.exports = lint;
