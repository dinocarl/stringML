var test = require('tape');
var tags = require('../tags');

test('test the span tag', function (assert) {
  assert.deepEqual(tags.span('test'), ['span', {}, 'test', []]);
  assert.end();
});