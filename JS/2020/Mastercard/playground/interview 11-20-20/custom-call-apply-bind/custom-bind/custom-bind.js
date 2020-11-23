const testObj = {type: 'rose', color: 'red'};

const myTestFunc = function() {
    console.log(`the type is ${this.type} and color is ${this.color}`)
}

const show = myTestFunc.bind(testObj);

show();

// my custom bind

Function.prototype.my_bind = function(otherThis) {

    let boundTargetFunction = this;

    return function boundFunction() {

        return boundTargetFunction.apply(otherThis);
    }

}

const myBindShow = myTestFunc.my_bind(testObj);

myBindShow();

