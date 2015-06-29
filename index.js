var eslint = require('./lib/eslint');
var jshint = require('./lib/jshint');

function lint(option, cb) {
  var engine = {
      'eslint': eslint,
      'jshint': jshint
    }[(option.engine || 'eslint').toLowerCase()] || eslint;

  engine.call(this, option, cb);
}

module.exports = lint;
