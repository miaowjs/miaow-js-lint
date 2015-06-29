var _ = require('lodash');
var JSHINT = require('jshint').JSHINT;
var RcLoader = require('rcloader');

var reporter = require('./reporter');

function lint(option, cb) {
  var rcLoader = new RcLoader('.jshintrc');

  rcLoader.for(this.srcAbsPath, function (err, opts) {
    JSHINT(
      this.contents.toString(),
      _.extend({}, opts || {}, option.config || {})
    );

    var messages = JSHINT.errors.map(function (message) {
      return {
        line: message.line,
        column: message.character,
        message: message.reason
      };
    });

    reporter(this.srcPath, messages);

    cb();
  }.bind(this));
}

module.exports = lint;
