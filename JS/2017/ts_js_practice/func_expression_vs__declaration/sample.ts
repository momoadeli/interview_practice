// They're actually really similar. How you call them is exactly the same.
// The difference lies in how the browser loads them into the execution context.

// Function declarations load before any code is executed.

// Function expressions load only when the interpreter reaches that line of code.

// So if you try to call a function expression before it's loaded, you'll get an
// error! If you call a function declaration instead, it'll always work, because 
// no code can be called until all declarations are loaded.
// 

// function declaration:
function funcDeclaration () {
	console.log('this is a function declaration');
}


funcDeclaration();

// function expression: 
var funcExpression = function x() {

	console.log('this is a function expression');
}

funcExpression();