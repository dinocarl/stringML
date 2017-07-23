# StringML

StringML is a Javascript templating library that written in vanilla JS and outputs HTML strings. There's really nothing too special going on here: while similar to Mustache, Handlebars, and underscore templates where the output is a string of HTML, the StringML syntax just uses Javascript functions. The functions break down into

* HTML tag functions
* A converter function that takes the output of the HTML functions and creates an HTML string

## HTML Tag Functions

The StringML HTML tag functions support

* Nesting
* Componentization
* Arbitrary argument order
* Full support of HTML5
* HTML attributes using native naming
* HTML-like appearance
* Comments

Here's a basic example

```js
import {
  header,
  h1,
  span
} from 'stringML';

const pageHeader = 
  header(
    h1(
      span('Page Header Text')
    )
  )
;
```

You can easily add HTML attributes to this, and change the whitespace to your liking.

```js
const pageHeader = 
  header({id: 'pageHeader', class: 'hero xs-span12'},
    h1(
      span({class: 'special-font-adapter'}, 'Page Header Text')
    )
  )
;
```

Note that HTML attributes are simply key names in an object passed to the function, using the HTML attribute's name. In other words, simply supply `{class: 'some-class}` in order to get `class="some-class"` in the output. Further, arguments can be in any order, and there can be as many sibling elements as desired.

```js
const pageContent =
  article(
    p('Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
    p('Nullam hendrerit sapien non placerat eleifend.'),
    p('Nulla ullamcorper viverra eros, sit amet pharetra libero commodo vitae.', {class: 'last'})
  )
;
```

### Collections

Collections are simple to accomplish. Rather than using special syntax like Handlebars requires, StringML allows you to use any JS iterator, though a `map` will likely be the most terse and legible. You'll also need to use [the spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator) to turn the array into a list of arguments.

```js
const listData = ['item 1', 'item 2', 'item 3'];
const listItems = listData.map( (item) => li(item) );
const orderedItemList = ol(
  ...listItems
);
```

The ES5 variation is less clean in terms of emulating HTML, but works just fine

```js
var orderedItemList = ol.apply(null, listItems);
```

### Comments

There is a dedicated comment function, called `comment`.

```js
const pageContent =
  article(
    p('Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
    p('Nullam hendrerit sapien non placerat eleifend.'),
    p('Nulla ullamcorper viverra eros, sit amet pharetra libero commodo vitae.', {class: 'last'}),
    comment('Weird that I\'d need a comment in my HTML output, but, hey, here we are.')
  )
;
```

## Converter Function

The `stringML` function converts the output of the HTML tag functions into an HTML string:

```js
// assuming all the imports and declarations from above
import {
  ...,
  stringML
} from 'stringML';

const pageHTML = [
  pageHeader,
  pageContent,
  orderedItemList
];

const rendered = pageHTML.map((node) => stringML(node)).join('\n');
```

becomes

```html
<header id="pageHeader" class="hero xs-span12"><h1><span class="special-font-adapter">Page Header Text</span></h1></header>
<article><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Nullam hendrerit sapien non placerat eleifend.</p><p class="last">Nulla ullamcorper viverra eros, sit amet pharetra libero commodo vitae.</p><!-- Weird that I'd need a comment in my HTML output, but, hey, here we are. --></article>
<ol><li>item 1</li><li>item 2</li><li>item 3</li></ol>
```
