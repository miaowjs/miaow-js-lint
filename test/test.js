var assert = require('assert');
var miaow = require('miaow');
var path = require('path');

var parse = require('../index');
describe('miaow-amd-wrap', function() {
  this.timeout(10e3);

  before(function(done) {
    miaow({
      context: path.resolve(__dirname, './fixtures')
    }, function(err) {
      if (err) {
        console.error(err.toString(), err.stack);
        process.exit(1);
      }

      done();
    });
  });

  it('接口是否存在', function() {
    assert(!!parse);
  });
});
