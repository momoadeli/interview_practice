const testObj = {type: 'flower', color: 'red'};

const myTestFunc = function() {
    console.log(`the type is ${this.type}`);
}

// conventional call:

myTestFunc.call(testObj);

// custom call (myCall)

Function.prototype.myCall = function(otherThis) {
    console.log('the other this myCall')
    otherThis.__mycall__ = this;
    otherThis.__mycall__();

}

myTestFunc.myCall(testObj);