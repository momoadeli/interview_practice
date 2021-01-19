const myObj = { color: 'red', type: 'car' };

function myFunc(year, model) {
    console.log(`this is ${this} and year is ${year} and model is ${model}`);
}

Function.prototype.customBind = function(otherThis, ...args) {

    let boundTargetFunction = this;

    return function bound() {
        return boundTargetFunction(args);
    }
}


const myF = myFunc.customBind(myObj, '1980', 'chevy');
myF();