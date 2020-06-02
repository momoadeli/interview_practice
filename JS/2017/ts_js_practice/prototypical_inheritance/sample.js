
// * https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9
// BEST READ: * https://medium.com/@kevincennis/prototypal-inheritance-781bccc97edb
// 
// In JavaScript, class inheritance is implemented on top of prototypal inheritance,
// but that does not mean that it does the same thing:
// JavaScript’s class inheritance uses the prototype chain to wire the child 
// `Constructor.prototype` to the parent `Constructor.prototype` for delegation. 
// Usually, the `super()` constructor is also called. Those steps form single-ancestor
// parent/child hierarchies and create the tightest coupling available in OO design.
//
// Differential Inheritance
// JavaScript uses an inheritance model called “differential inheritance”. 
// What that means is that methods aren’t copied from parent to child. 
// Instead, children have an “invisible link” back to their parent object.
// For example, fido doesn’t actually have its own method called bark() \
// (in other words, fido.hasOwnProperty(‘bark’) === false).
// What actually happens when I write fido.bark() is this:
// 1. The JS engine looks for a property called bark on our fido object.
// 2. It doesn’t find one, so it looks “up the prototype chain” to fido’s parent, 
// which is Dog.prototype.
// 3. It finds Dog.prototype.bark, and calls it with this bound to fido.

var MyDog = function Dog(strName) {
    this.name = strName;
    console.log(strName);
}

MyDog.prototype.bark = function () {
    console.log(this.name);
}

var MyCollie = function Collie(strName) {
    MyDog.call(this, strName);
}

MyCollie.prototype = Object.create(MyDog.prototype);

MyCollie.prototype.bark = function() {
    console.log(this.name);
}

var myDog = new MyDog('dog bark!');
myDog.bark();

var myCollie = new MyCollie('collie bark!');
myCollie.bark();
