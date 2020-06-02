// simplistic but clear: https://www.w3schools.com/js/js_function_apply.asp
// 2018: https://medium.com/@leonardobrunolima/javascript-tips-apply-vs-call-vs-bind-d738a9e8b4e1

// http://stackoverflow.com/questions/8659390/context-to-use-call-and-apply-in-javascript
//
// What Product.apply(this, arguments) does is the following: The Product constructor 
// is applied as a function within each of the Food and Toy constructors, and each of 
// these object instances are being passed as this. Thus, each of Food and Toy now have 
// this.name and this.category properties.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

// NOTE!!!!***!!!:  call() is used to normally execute the base class ctor from child
// You use call or apply when you want to pass a different this value to the function. 
// In essence, this means that you want to execute a function as if it were a method of 
// a particular object. The only difference between the two is that call expects parameters 
// separated by commas, while apply expects parameters in an array.
//

function Product(name, price) {
    console.log('ctor \'Product\'');
    
    this.name = name;
    this.price = price;

    if (price < 0)
        throw RangeError('Cannot create product "' + name + '" with a negative price');
    return this;
}

function Food(name, price) {
    console.log('ctor \'Food\'');
    Product.apply(this, arguments); //Product constructor applied ('arguments' are 'name' and 'price')
    this.category = 'food';
}
Food.prototype = new Product();

console.log('REDUNDANT. Food instance is: ', Food.prototype);

function Toy(name, price) {
    console.log('ctor \'Toy\'');
    Product.apply(this, arguments); //Product constructor applied ('arguments' are 'name' and 'price')
    this.category = 'toy';
}

Toy.prototype = new Product();

console.log('REDUNDANT. Food instance is: ', Toy.prototype);

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);

console.log('cheese instance is: ', cheese);
console.log('fun instnce is: ', fun);