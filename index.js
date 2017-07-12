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
  return h.apply(this, ['a'].concat(args));
}

function abbr() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['abbr'].concat(args));
}

function address() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['address'].concat(args));
}

function area() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['area'].concat(args));
}

function article() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['article'].concat(args));
}

function aside() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['aside'].concat(args));
}

function audio() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['audio'].concat(args));
}

function b() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['b'].concat(args));
}

function base() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['base'].concat(args));
}

function bdi() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['bdi'].concat(args));
}

function bdo() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['bdo'].concat(args));
}

function blockquote() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['blockquote'].concat(args));
}

function body() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['body'].concat(args));
}

function br() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['br'].concat(args));
}

function button() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['button'].concat(args));
}

function canvas() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['canvas'].concat(args));
}

function caption() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['caption'].concat(args));
}

function cite() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['cite'].concat(args));
}

function code() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['code'].concat(args));
}

function col() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['col'].concat(args));
}

function colgroup() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['colgroup'].concat(args));
}

function dd() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['dd'].concat(args));
}

function del() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['del'].concat(args));
}

function dfn() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['dfn'].concat(args));
}

function dir() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['dir'].concat(args));
}

function div() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['div'].concat(args));
}

function dl() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['dl'].concat(args));
}

function dt() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['dt'].concat(args));
}

function em() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['em'].concat(args));
}

function embed() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['embed'].concat(args));
}

function fieldset() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['fieldset'].concat(args));
}

function figcaption() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['figcaption'].concat(args));
}

function figure() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['figure'].concat(args));
}

function footer() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['footer'].concat(args));
}

function form() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['form'].concat(args));
}

function h1() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['h1'].concat(args));
}

function h2() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['h2'].concat(args));
}

function h3() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['h3'].concat(args));
}

function h4() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['h4'].concat(args));
}

function h5() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['h5'].concat(args));
}

function h6() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['h6'].concat(args));
}

function head() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['head'].concat(args));
}

function header() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['header'].concat(args));
}

function hgroup() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['hgroup'].concat(args));
}

function hr() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['hr'].concat(args));
}

function html() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['html'].concat(args));
}

function i() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['i'].concat(args));
}

function iframe() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['iframe'].concat(args));
}

function img() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['img'].concat(args));
}

function input() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['input'].concat(args));
}

function ins() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['ins'].concat(args));
}

function kbd() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['kbd'].concat(args));
}

function keygen() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['keygen'].concat(args));
}

function label() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['label'].concat(args));
}

function legend() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['legend'].concat(args));
}

function li() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['li'].concat(args));
}

function link() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['link'].concat(args));
}

function main() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['main'].concat(args));
}

function map() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['map'].concat(args));
}

function mark() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['mark'].concat(args));
}

function menu() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['menu'].concat(args));
}

function meta() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['meta'].concat(args));
}

function nav() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['nav'].concat(args));
}

function noscript() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['noscript'].concat(args));
}

function object() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['object'].concat(args));
}

function ol() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['ol'].concat(args));
}

function optgroup() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['optgroup'].concat(args));
}

function option() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['option'].concat(args));
}

function p() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['p'].concat(args));
}

function param() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['param'].concat(args));
}

function pre() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['pre'].concat(args));
}

function progress() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['progress'].concat(args));
}

function q() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['q'].concat(args));
}

function rp() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['rp'].concat(args));
}

function rt() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['rt'].concat(args));
}

function ruby() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['ruby'].concat(args));
}

function s() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['s'].concat(args));
}

function samp() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['samp'].concat(args));
}

function script() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['script'].concat(args));
}

function section() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['section'].concat(args));
}

function select() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['select'].concat(args));
}

function small() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['small'].concat(args));
}

function source() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['source'].concat(args));
}

function span() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['span'].concat(args));
}

function strong() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['strong'].concat(args));
}

function style() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['style'].concat(args));
}

function sub() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['sub'].concat(args));
}

function sup() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['sup'].concat(args));
}

function table() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['table'].concat(args));
}

function tbody() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['tbody'].concat(args));
}

function td() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['td'].concat(args));
}

function textarea() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['textarea'].concat(args));
}

function tfoot() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['tfoot'].concat(args));
}

function th() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['th'].concat(args));
}

function thead() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['thead'].concat(args));
}

function title() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['title'].concat(args));
}

function tr() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['tr'].concat(args));
}

function track() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['track'].concat(args));
}

function u() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['u'].concat(args));
}

function ul() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['ul'].concat(args));
}

function video() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['video'].concat(args));
}

function wbr() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['wbr'].concat(args));
}

function comment() {
  var args = Array.prototype.slice.call(arguments);
  return h.apply(this, ['!--'].concat(args));
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
