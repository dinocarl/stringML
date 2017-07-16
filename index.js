function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}

function h(tagName){
  var args = Array.prototype.slice.call(arguments, 1);
  // arrange the arguments into the tuple the stringML function expects
  var attrsArr = args.filter(function(item){
    return getType(item) === 'Object';
  });
  var textNodeArr = args.filter(function(item){
    return getType(item) === 'String';
  });
  var childrenArr = args.filter(function(item){
    return getType(item) === 'Array';
  });
  attrs = attrsArr.length > 0 ? attrsArr[0] : {};
  textNode = textNodeArr.length > 0 ? textNodeArr[0] : '';
  children = childrenArr.length > 0 ? childrenArr : [];
  return [tagName, attrs, textNode, children];
}

function a() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['a'].concat(args));
}

function abbr() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['abbr'].concat(args));
}

function address() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['address'].concat(args));
}

function area() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['area'].concat(args));
}

function article() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['article'].concat(args));
}

function aside() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['aside'].concat(args));
}

function audio() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['audio'].concat(args));
}

function b() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['b'].concat(args));
}

function base() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['base'].concat(args));
}

function bdi() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['bdi'].concat(args));
}

function bdo() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['bdo'].concat(args));
}

function blockquote() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['blockquote'].concat(args));
}

function body() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['body'].concat(args));
}

function br() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['br'].concat(args));
}

function button() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['button'].concat(args));
}

function canvas() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['canvas'].concat(args));
}

function caption() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['caption'].concat(args));
}

function cite() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['cite'].concat(args));
}

function code() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['code'].concat(args));
}

function col() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['col'].concat(args));
}

function colgroup() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['colgroup'].concat(args));
}

function dd() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['dd'].concat(args));
}

function del() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['del'].concat(args));
}

function dfn() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['dfn'].concat(args));
}

function dir() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['dir'].concat(args));
}

function div() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['div'].concat(args));
}

function dl() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['dl'].concat(args));
}

function dt() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['dt'].concat(args));
}

function em() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['em'].concat(args));
}

function embed() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['embed'].concat(args));
}

function fieldset() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['fieldset'].concat(args));
}

function figcaption() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['figcaption'].concat(args));
}

function figure() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['figure'].concat(args));
}

function footer() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['footer'].concat(args));
}

function form() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['form'].concat(args));
}

function h1() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['h1'].concat(args));
}

function h2() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['h2'].concat(args));
}

function h3() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['h3'].concat(args));
}

function h4() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['h4'].concat(args));
}

function h5() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['h5'].concat(args));
}

function h6() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['h6'].concat(args));
}

function head() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['head'].concat(args));
}

function header() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['header'].concat(args));
}

function hgroup() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['hgroup'].concat(args));
}

function hr() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['hr'].concat(args));
}

function html() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['html'].concat(args));
}

function i() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['i'].concat(args));
}

function iframe() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['iframe'].concat(args));
}

function img() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['img'].concat(args));
}

function input() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['input'].concat(args));
}

function ins() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['ins'].concat(args));
}

function kbd() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['kbd'].concat(args));
}

function keygen() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['keygen'].concat(args));
}

function label() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['label'].concat(args));
}

function legend() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['legend'].concat(args));
}

function li() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['li'].concat(args));
}

function link() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['link'].concat(args));
}

function main() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['main'].concat(args));
}

function map() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['map'].concat(args));
}

function mark() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['mark'].concat(args));
}

function menu() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['menu'].concat(args));
}

function meta() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['meta'].concat(args));
}

function nav() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['nav'].concat(args));
}

function noscript() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['noscript'].concat(args));
}

function object() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['object'].concat(args));
}

function ol() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['ol'].concat(args));
}

function optgroup() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['optgroup'].concat(args));
}

function option() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['option'].concat(args));
}

function p() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['p'].concat(args));
}

function param() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['param'].concat(args));
}

function pre() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['pre'].concat(args));
}

function progress() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['progress'].concat(args));
}

function q() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['q'].concat(args));
}

function rp() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['rp'].concat(args));
}

function rt() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['rt'].concat(args));
}

function ruby() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['ruby'].concat(args));
}

function s() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['s'].concat(args));
}

function samp() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['samp'].concat(args));
}

function script() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['script'].concat(args));
}

function section() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['section'].concat(args));
}

function select() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['select'].concat(args));
}

function small() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['small'].concat(args));
}

function source() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['source'].concat(args));
}

function span() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['span'].concat(args));
}

function strong() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['strong'].concat(args));
}

function style() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['style'].concat(args));
}

function sub() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['sub'].concat(args));
}

function sup() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['sup'].concat(args));
}

function table() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['table'].concat(args));
}

function tbody() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['tbody'].concat(args));
}

function td() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['td'].concat(args));
}

function textarea() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['textarea'].concat(args));
}

function tfoot() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['tfoot'].concat(args));
}

function th() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['th'].concat(args));
}

function thead() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['thead'].concat(args));
}

function title() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['title'].concat(args));
}

function tr() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['tr'].concat(args));
}

function track() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['track'].concat(args));
}

function u() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['u'].concat(args));
}

function ul() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['ul'].concat(args));
}

function video() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['video'].concat(args));
}

function wbr() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['wbr'].concat(args));
}

function comment() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(null, ['!--'].concat(args));
}

// -- end tag shortcuts

var selfClosingTagNames = [
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
];

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
  return selfClosingTagNames.indexOf(str) > -1;
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

// uses array as a tuple expecting the following structure
// ['tagName', {tag: 'attributes'}, 'textNode', ['children']]
// to output an HTML string
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

// individual exports
exports.a = a;
exports.abbr = abbr;
exports.address = address;
exports.area = area;
exports.article = article;
exports.aside = aside;
exports.audio = audio;
exports.b = b;
exports.base = base;
exports.bdi = bdi;
exports.bdo = bdo;
exports.blockquote = blockquote;
exports.body = body;
exports.br = br;
exports.button = button;
exports.canvas = canvas;
exports.caption = caption;
exports.cite = cite;
exports.code = code;
exports.col = col;
exports.colgroup = colgroup;
exports.dd = dd;
exports.del = del;
exports.dfn = dfn;
exports.dir = dir;
exports.div = div;
exports.dl = dl;
exports.dt = dt;
exports.em = em;
exports.embed = embed;
exports.fieldset = fieldset;
exports.figcaption = figcaption;
exports.figure = figure;
exports.footer = footer;
exports.form = form;
exports.h1 = h1;
exports.h2 = h2;
exports.h3 = h3;
exports.h4 = h4;
exports.h5 = h5;
exports.h6 = h6;
exports.head = head;
exports.header = header;
exports.hgroup = hgroup;
exports.hr = hr;
exports.html = html;
exports.i = i;
exports.iframe = iframe;
exports.img = img;
exports.input = input;
exports.ins = ins;
exports.kbd = kbd;
exports.keygen = keygen;
exports.label = label;
exports.legend = legend;
exports.li = li;
exports.link = link;
exports.main = main;
exports.map = map;
exports.mark = mark;
exports.menu = menu;
exports.meta = meta;
exports.nav = nav;
exports.noscript = noscript;
exports.object = object;
exports.ol = ol;
exports.optgroup = optgroup;
exports.option = option;
exports.p = p;
exports.param = param;
exports.pre = pre;
exports.progress = progress;
exports.q = q;
exports.rp = rp;
exports.rt = rt;
exports.ruby = ruby;
exports.s = s;
exports.samp = samp;
exports.script = script;
exports.section = section;
exports.select = select;
exports.small = small;
exports.source = source;
exports.span = span;
exports.strong = strong;
exports.style = style;
exports.sub = sub;
exports.sup = sup;
exports.table = table;
exports.tbody = tbody;
exports.td = td;
exports.textarea = textarea;
exports.tfoot = tfoot;
exports.th = th;
exports.thead = thead;
exports.title = title;
exports.tr = tr;
exports.track = track;
exports.u = u;
exports.ul = ul;
exports.video = video;
exports.wbr = wbr;
exports.comment = comment;

exports.stringML = stringML;

exports.selfClosingTagNames = selfClosingTagNames;
