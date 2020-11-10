# These are the JS related questions to consider learning

- ES6 structures
- SOLID
  - dependency injection
- classes (vs function constructors), prototypes, inheritance/ polymorphism
  - class method (no arrows?):
    - <https://stackoverflow.com/questions/48920135/es6-functions-arrow-functions-and-this-in-an-es6-class>
    - <https://stackoverflow.com/questions/48920135/es6-functions-arrow-functions-and-this-in-an-es6-class>
- arrow functions
  - unlike regular functions don't have a separate 'this' which resolves some closure issues:
    - <https://medium.com/@vmarchesin/javascript-arrow-functions-and-closures-4e53aa30b774>
- rest vs spread
  - The spread operator unpacks elements.
  - The rest parametr packs elements into an array.
  - see: <https://www.javascripttutorial.net/es6/javascript-spread/>
- call vs apply vs bind
- memoization
- decomposition (array vs object)
- javascript architecture: event loop, nonblocking, asynchronous, ect
- async concpets: promise, asyn/await, reactiveX
- web tokens and security
- various for loops: for, foreach, for of, ...
- various iterations
- arrays. Array.from, new Array(), copy/create multidimensional arrays
- linked lists
- map, sets
- map, reduce
- function definition vs declaration vs IIFE
- scope (gobal, local, block), lexical vs function scope, let, var, literals
- hoisting
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
