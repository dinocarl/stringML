var getType = require('get-type');

module.exports = function (tagName){
  var args = Array.prototype.slice.call(arguments, 1);
  // arrange the arguments into the tuple the stringML function expects
  var attrsArr = args.filter(function(item){
    return getType.isObject(item);
  });
  var textNodeArr = args.filter(function(item){
    return getType.isString(item);
  });
  var childrenArr = args.filter(function(item){
    return getType.isArray(item);
  });
  attrs = attrsArr.length > 0 ? attrsArr[0] : {};
  textNode = textNodeArr.length > 0 ? textNodeArr[0] : '';
  children = childrenArr.length > 0 ? childrenArr : [];
  return [tagName, attrs, textNode, children];
}
