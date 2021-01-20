# These are the JS related questions to consider learning

- ES6 structures
  - primitives:
    - string,
    - number,
    - boolean,
    - undefined,
    - BigInt:  double-precision 64-bit binary format IEEE 754 value
    - Symbol:
      - symbol/reflect/proxy: meta programming with ES6: <https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/>
      - https://developer.mozilla.org/en-US/docs/Glossary/Symbol
      - why use? <https://medium.com/intrinsic/javascript-symbols-but-why-6b02768f4a5c>
      -
  - data types
  - advanced concepts (generators, module, literals, etc): <https://medium.com/javascript-scene/7-surprising-things-i-learned-writing-a-fibonacci-generator-4886a5c87710>
- 9 ways to modify arrays: <https://love2dev.com/blog/javascript-remove-from-array/>
- SOLID: 'single resonsibility', 'open closed'. 'liskov substituion', 'interface segregation', 'dependency inversion'
  - dependency injection
- classes (vs function constructors), prototypes, inheritance/ polymorphism
  - old school prototypical oop and prototypal inheritance: http://phrogz.net/js/classes/OOPinJS.html
  - class method (no arrows?):
    - <https://stackoverflow.com/questions/48920135/es6-functions-arrow-functions-and-this-in-an-es6-class>
    - <https://stackoverflow.com/questions/48920135/es6-functions-arrow-functions-and-this-in-an-es6-class>
- arrow functions
  - unlike regular functions don't have a separate 'this' which resolves some closure issues:
    - <https://medium.com/@vmarchesin/javascript-arrow-functions-and-closures-4e53aa30b774>
- functions:
  - pure
  - higher orderZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ
- rest vs spread
  - The spread operator unpacks elements.
  - The rest parameter packs elements into an array.
  - see: <https://www.javascripttutorial.net/es6/javascript-spread/>
- call vs apply vs bind: <https://www.hacksparrow.com/javascript/bind-vs-apply-vs-call.html>
- memoization (uses closure a cache): <https://codeburst.io/understanding-memoization-in-3-minutes-2e58daf33a19>
- destructuring (array vs object): <https://www.freecodecamp.org/news/array-and-object-destructuring-in-javascript/>
- javascript architecture: event loop, nonblocking, asynchronous, etc: <https://flaviocopes.com/javascript-event-loop/>
- async concepts: promise, asyn/await, reactiveX
- hoisting: <https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-what-is-hoisting-in-javascript-a63c1b2267a1>
- web tokens and security
- various for loops: for, foreach, for of, ...
- various iterations
- arrays. Array.from, new Array(), copy/create multidimensional arrays
  - initialize 2d array: const twoDArray = new Array(5).fill(0).map(el => el = new Array(5).fill(0));
- linked lists
- map, sets
- map, reduce
- function definition vs declaration vs IIFE
- closures:
  - 'A closure is the combination of a function and the lexical environment within which that function was declared.'
  - <https://medium.com/@vmarchesin/javascript-arrow-functions-and-closures-4e53aa30b774>
    - class Dog {
        constructor(name) {
          this.name = name
        }

        bark() {
          console.log(`Woof, my name is ${this.name}`);
        }

        sitAndBark() {
          setTimeout(function() { console.log(`Woof, my name is ${this.name}`) }, 1000)
        }
      }

      let rex = new Dog('Rex')

      rex.bark()
  - function makeFunc() {
      var name = 'Mozilla';
      function displayName() {
        alert(name);
      }
      return displayName;
    }

    var myFunc = makeFunc();
    myFunc();
- functional programming/currying
