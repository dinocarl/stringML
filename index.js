var tags = require('./tags');

function tagFromText(tagName, close) {
  close = close === 'close';
  var closing = close ? '/' : '';
  return [
    '<',
    closing,
    tagName,
    '>'
  ].join('');
}

function isSelfClosing(str) {
  return [
    'area',
    'base',
    'br',
    'embed',
    'hr',
    'img',
    'input',
    'keygen',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr'
  ].indexOf(str) > -1;
}

function isComment(str) {
  return '!--' === str;
}

function zipAttrs(a, b) {
  return a.map(function (key, index) {
    return [
      key,
      '="',
      b[index],
      '"'
    ].join('');
  }).join(' ');
}

function attrsFromObject(obj) {
  var keys = Object.keys(obj);
  return zipAttrs(
    keys,
    keys.map(
      function (key) {
        return obj[key];
      }
    )
  );
}

function stringML(arr) {
  var openingTag = tagFromText(
    [
      arr[0],
      attrsFromObject(arr[1])
    ]
    .join(' ')
    .trim()
  );
  var textNode = closingTag = '';
  var children = [];
  if (isComment(arr[0])) {
    openingTag = '<!-- ';
    textNode = arr[2];
    closingTag = ' -->';
  }
  else if (!isSelfClosing(arr[0])) {
    textNode = arr[2];
    children = arr[3].map(function (item) {
      return stringML(item);
    });
    closingTag = tagFromText(arr[0], 'close');
  }
  return [
    openingTag,
    textNode,
    children.join(''),
    closingTag,
  ].join('');
}

module.exports = stringML;

exports.tags = tags;
