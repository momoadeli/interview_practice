const testObj = {type: 'flower', color: 'red'};

const myTestFunc = function(name) {
    console.log(`the type is ${this.type} and the color is ${this.color} and name is ${name}`);
}

myTestFunc.apply(testObj, ['rose', 'violet']); //   conventional calkl 

Function.prototype.my_apply = function(otherThis, ...args) {
    let sym = Symbol(this);
    otherThis[sym] = this;    //  set it to this of calling function
    otherThis[sym](args[0][0]);
}

myTestFunc.my_apply(testObj, ['rose', 'violet']);

