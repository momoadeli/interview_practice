const testObj = {type: 'flower', color: 'red'};

const myTestFunc = function(name) {
    let args = arguments;
    console.log(`the type is ${this.type} and the color is ${this.color} and the name is ${name}`);
}

// conventional call:

myTestFunc.call(testObj);

// custom call (myCall)

Function.prototype.my_call = function(otherThis, ...args) {
    console.log('the other this myCall')
    let sym = Symbol(this)  // obtain unique symbol (this is option)
    otherThis[sym] = this;
    otherThis[sym](args[0]);  // pass in first iondxe since a series of objects is passed in

}

myTestFunc.my_call(testObj, 'rose', 'violet');