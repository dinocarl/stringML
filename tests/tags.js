var test = require('tape');
var StringML = require('../index');

var div = StringML.div;
var header = StringML.header;
var h1 = StringML.h1;
var span = StringML.span;
var ol = StringML.ol;
var li = StringML.li;
var p = StringML.p;

var coll = ['item 1', 'item 2', 'item 3'];
var itemList = coll.map(function(item) {
  return li(item);
});

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
      expect1: [tag, {}, 'test', []],
      expect2: '<' + tag + '>test</' + tag + '>'
    }
  }),
  StringML.selfClosingTagNames.map(function (tag) {
    return {
      title: 'Simple test for ' + tag,
      result: StringML[tag]({id: 'someID', class: 'some-class', 'data-key': 'value'}),
      expect1: [tag, {id: 'someID', class: 'some-class', 'data-key': 'value'}, '', []],
      expect2: '<' + tag + ' id="someID" class="some-class" data-key="value">'
    };
  }),
  {
    title: 'Simple test for comment',
    result:  StringML.comment('text inside a comment'),
    expect1: ['!--', {}, 'text inside a comment', []],
    expect2: '<!-- text inside a comment -->'
  },
  {
    title: 'Simple Nested Case',
    result:
      div(
        span('test')
      ),
    expect1: ['div', {}, '', [['span', {}, 'test', []]]],
    expect2: '<div><span>test</span></div>'
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
    expect1: ['div', {}, '', [['header', {}, '', [['h1', {}, '', [['span', {}, 'test', []]]]]]]],
    expect2: '<div><header><h1><span>test</span></h1></header></div>'
  },
  {
    title: 'Nested, with siblings',
    result:
      ol(
        li('item 1'),
        li('item 2'),
        li('item 3')
      ),
    expect1: ['ol', {}, '', [['li', {}, 'item 1', []], ['li', {}, 'item 2', []], ['li', {}, 'item 3', []]]],
    expect2: '<ol><li>item 1</li><li>item 2</li><li>item 3</li></ol>'
  },
  {
    title: 'Nested collection',
    result:
      ol.apply(null, itemList),
    expect1: ['ol', {}, '', [['li', {}, 'item 1', []], ['li', {}, 'item 2', []], ['li', {}, 'item 3', []]]],
    expect2: '<ol><li>item 1</li><li>item 2</li><li>item 3</li></ol>'
  },
  {
    title: 'Only the first string argument gets used',
    result:
      p('hi', 'there', 'and there', 'and also there'),
    expect1: ['p', {}, 'hi', []],
    expect2: '<p>hi</p>'
  },
  {
    title: 'Only the first object argument gets used',
    result:
      p({id: 'present'}, {class: 'absent'}, {'data-key': 'value'}),
    expect1: ['p', {id: 'present'}, '', []],
    expect2: '<p id="present"></p>'
  }
);

// run the tests
test('Tags Tests', function (assert) {
  assert.plan(testData.length * 2);
  testData.forEach(function (testCase) {
    assert.deepEqual(testCase.result, testCase.expect1, testCase.title);
    assert.deepEqual(StringML.stringML(testCase.result), testCase.expect2, testCase.title + ', rendered');
  });
});
