
/*
Closures cannot access the arguments object of the parent,
but, because functions are first class objects, we can pass a function as a parameter.
The closure can now access the arguments object of the function that is passesd as a parameter.
So, there is no confusion as to which arguments object we want the closure to access.
We're basically taking advantage of its limitations
*/
function demoMemo(func) {
  //we must return a function in order to keep state
  //this will be more apparant in a recursive example
  let cache = {};

  return function (...args) {
    console.log(func); // >   function (num){num + num}
    cache = [...args];  // here due to closure cache contains previous args and we can check if we need to execute stuff again or return.
    Object.keys(arguments).forEach(arg => {
      console.log('arg is: ', arguments[arg])
    })
    args.forEach(arg => {
      console.log('another ways arg ', arg);
    })
  }
}

// Our function expression here calls demoMemo and passes it an anonymous function. for extra stuff....might not need it for memoization
var adder = demoMemo(function (num) {
  num + num;
})

//Once that is passed, as you can see, when we call our function expression,
//we have access to all the properties of the function we want to memoize

adder(1);
adder(22);
adder(22, 33);
