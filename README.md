## What is ES6??

ECMAScript 6 (What is that??)
The 2015 update to the JavaScript (ECMAScript) language.  It was BIG.

The following is by no means a comprehensive list of ES6 updates, and there are plenty of new features in ES7, 8, and 9 (the current version) too!  This is a short list of features we talk about, with some examples in `index.js` corresponding to the topics.

## Classes ... more to come tomorrow!

## `let` & `const`
See `index.js`

## `this`
What is `this`??

- it's like `self` in Ruby, but for JS .... SORT OF!
- it refers to the context object
All functions -- declarations and expressions, and including methods, but excluding arrow functions, get two "hidden bonus parameters": `this` and `arguments`.  
`this` gets its value based on the INVOCATION PATTERN we use to call a function, i.e. HOW the function is invoked...  There are four invocation patterns in JavaScript, each with its own rule for how `this` gets its value (remember we're not including arrow functions here):

  #### How we _invoke_ the function
  1. Function invocation
    - No receiving object
    `run()`
    `this` will be the global object
    In strict mode, `this` is `undefined`

  2. Method invocation
    - receiving object present
    `obj.method()`
    `this` will be the receiving object

  3. Apply, or bind/call/apply invocation
    - can override `this` in any case!
    `run.call(thisArg)`
    Tell the function (or method) what `this` is explicitly

  4. Constructor invocation
    - use the `new` keyword before invocation
    `new Waffle(waffleInfo)`
    `this` is the new object that's created
    Also rare case of implicit return, the new object is returned as well.

Then there is strict mode... affects the function invocation pattern - whether `this` is undefined or global object

Then there are arrow functions...
Every function starting with the keyword `function` (expressions or declarations) gets two hidden bonus parameters - `this` and `arguments`
BUT ARROW FUNCTIONS HAVE NEITHER!!  NO `this`, no `arguments`!
Arrow functions, completely unlike all other functions, do not get a `this` value of their own.  Instead, references to `this` will refer to whatever `this` is in the scope of where the arrow function was defined, having nothing to do with the invocation pattern used to call it.

### When adding event listeners, `this` in the callback will be the DOM element the listener was attached to... unless the callback is an arrow function.

## Arrow Functions
() => {}
## Template Strings
Back ticks - make special strings that allow interpolation and formation of html templates within
## Destructuring
### Objects & Arrays
### As arguments or just variable declarations
A shorthand way of making variable assignments from information within a plain object or an array.
## default/rest/spread operators
## Iterators `for..of`
