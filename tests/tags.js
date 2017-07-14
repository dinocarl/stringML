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

// assemble the test data
var testData = [].concat(
  closedTagNames.map(function (tag) {
    return {
      title: 'Simple test for ' + tag,
      result: StringML[tag]('test'),
      expect: [tag, {}, 'test', []]
    }
  }),
  StringML.selfClosingTagNames.map(function (tag) {
    return {
      title: 'Simple test for ' + tag,
      result: StringML[tag]({id: 'someID', class: 'some-class'}),
      expect: [tag, {id: 'someID', class: 'some-class'}, '', []]
    };
  }),
  {
    title: 'Simple test for comment',
    result:  StringML.comment('text inside a comment'),
    expect: ['!--', {}, 'text inside a comment', []]
  },
  {
    title: 'Simple Nested Case',
    result:
      div(
        span('test')
      ),
    expect: ['div', {}, '', [['span', {}, 'test', []]]]
  },
  {
    title: 'Deeply Nested Case',
    result:
      div(
        header(
          h1(
            span('test')
          )
        )
      ),
    expect: ['div', {}, '', [['header', {}, '', [['h1', {}, '', [['span', {}, 'test', []]]]]]]]
  }
);

// run the tests
test('Tags Tests', function (assert) {
  assert.plan(testData.length);
  testData.forEach(function (testCase) {
    assert.deepEqual(testCase.result, testCase.expect, testCase.title);
  });
})
