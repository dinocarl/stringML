# StringML

StringML is a Javascript templating library that written in vanilla JS and outputs HTML strings. There's really nothing too special going on here: while similar to Mustache, Handlebars, and underscore templates where the output is a string of HTML, the StringML syntax just uses Javascript functions. The functions break down into

* HTML functions
* A Converter function that takes the output of the HTML functions and creates an HTML string

## HTML Functions

The StringML HTML functions support

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

Arguments can be in any order, and there can be as many sibling elements as desired.

```js
const pageContent = 
  article(
    p('Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
    p('Nullam hendrerit sapien non placerat eleifend.'),
    p('Nulla ullamcorper viverra eros, sit amet pharetra libero commodo vitae.' {class: 'last'}),
  )
;
```