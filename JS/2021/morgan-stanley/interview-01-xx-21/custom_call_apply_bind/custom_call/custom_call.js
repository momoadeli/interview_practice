function myFunc(year, model) {
    console.log('myFunc');
}

const myObj = { color: 'red', type: 'customX' };

Function.prototype.customCall = function(otherThis, ...args) {
    const sym = Symbol('custom call');
    otherThis[sym] = this;
    otherThis[sym](args);

}

myFunc.customCall(myObj, '1960', 'chevy');