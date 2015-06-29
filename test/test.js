/*eslint-env node, mocha */
var assert = require('assert');
var fs = require('fs');
var miaow = require('miaow');
var path = require('path');

var parse = require('../index');
describe('miaow-amd-wrap', function () {
  this.timeout(10e3);

  var log;

  before(function (done) {
    miaow.compile({
      cwd: path.resolve(__dirname, './fixtures'),
      output: path.resolve(__dirname, './output'),
      pack: false,
      module: {
        tasks: [
          {
            test: /\.js$/,
            plugins: [{
              plugin: parse,
              option: {
                engine: 'jshint',
                config: {
                  "quotmark": "double"
                }
              }
            }]
          }
        ]
      }
    }, function (err) {
      if (err) {
        console.error(err.toString());
        throw err;
      }
      log = JSON.parse(fs.readFileSync(path.resolve(__dirname, './output/miaow.log.json')));
      done();
    });
  });

  it('接口是否存在', function () {
    assert(!!parse);
  });
});
