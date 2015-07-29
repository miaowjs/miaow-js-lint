var mutil = require('miaow-util');

var eslint = require('./lib/eslint');
var jshint = require('./lib/jshint');

var pkg = require('./package.json');

function lint(option, cb) {
  if (!this.contents.toString().trim()) {
    return cb();
  }

  var engine = {
      'eslint': eslint,
      'jshint': jshint
    }[(option.engine || 'eslint').toLowerCase()] || eslint;

  engine.call(this, option, cb);
}

module.exports = mutil.plugin(pkg.name, pkg.version, lint);
