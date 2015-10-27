var _ = require('lodash');
var linter = require('eslint').linter;
var RcLoader = require('rcloader');
var path = require('path');

var reporter = require('./reporter');

function lint(opitons, callback) {
  var context = this;
  var rcLoader = new RcLoader('.eslintrc');

  rcLoader.for(path.resolve(context.context, context.src), function(err, opts) {
    if (err) {
      return callback(err);
    }

    var messages;
    try {
      messages = linter.verify(
        context.contents.toString(),
        _.extend({}, opts || {}, opitons.config || {})
      );
    } catch (err) {
      return callback(err);
    }

    messages = messages.map(function(message) {
      return _.pick(message, ['line', 'column', 'message', 'ruleId', 'severity', 'fatal']);
    });

    reporter(context.src, messages);

    callback();
  });
}

module.exports = lint;
