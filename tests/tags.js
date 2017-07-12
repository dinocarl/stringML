var test = require('tape');
var StringML = require('../index'); 

var div = StringML.div;
var header = StringML.header;
var h1 = StringML.h1;
var span = StringML.span;

var closedTagNames = Object.keys(StringML)
  .filter(function (item) {
    return item !== 'comment' && item !== 'stringML' && item !== 'selfClosingTagNames';
  })
  .filter(function (item) {
    return StringML.selfClosingTagNames.indexOf(item) === -1;
  })
;

closedTagNames.forEach(function (tag) {
  test('Simple test for ' + tag + ' tag', function (assert) {
    var testCase = StringML[tag]('test');
    var expected = [tag, {}, 'test', []];
    assert.deepEqual(testCase, expected);
    assert.end();
  });
});

StringML.selfClosingTagNames.forEach(function (tag) {
  test('Simple test for ' + tag + ' tag', function (assert) {
    var testCase = StringML[tag]({id: 'someID', class: 'some-class'});
    var expected = [tag, {id: 'someID', class: 'some-class'}, '', []];
    assert.deepEqual(testCase, expected);
    assert.end();
  });
});

test('Simple test for comment', function (assert) {  
  var testCase = StringML.comment('text inside a comment');
  var expected = ['!--', {}, 'text inside a comment', []];
  assert.deepEqual(testCase, expected);
  assert.end();
});

test('Nested Tags', function (assert) {
  var testCase1 =
    div(
      span('test')
    );
  var expected1 = ['div', {}, '', [['span', {}, 'test', []]]];
  var testCase2 =
    div(
      header(
        h1(
          span('test')
        )
      )
    );
  var expected2 = ['div', {}, '', [['header', {}, '', [['h1', {}, '', [['span', {}, 'test', []]]]]]]];
  assert.deepEqual(testCase1, expected1);
  assert.deepEqual(testCase2, expected2);
  assert.end();
});