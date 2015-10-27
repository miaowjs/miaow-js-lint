var eslint = require('./lib/eslint');
var jshint = require('./lib/jshint');

var pkg = require('./package.json');

module.exports = function(options, callback) {
  var context = this;

  if (!context.contents.toString().trim()) {
    return callback();
  }

  var engine = {
      eslint: eslint,
      jshint: jshint
    }[(options.engine || 'eslint').toLowerCase()] || eslint;

  engine.call(context, options, callback);
};

module.exports.toString = function() {
  return [pkg.name, pkg.version].join('@');
};
