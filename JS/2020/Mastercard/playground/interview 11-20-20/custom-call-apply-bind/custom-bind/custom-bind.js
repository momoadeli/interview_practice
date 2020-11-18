const testObj = {theName: 'rose', color: 'red'};

const testFunc = function() {
    console.log(`the color is ${this.color} and the name is ${this.theName}`);
}

testFunc(); //unbound.print's undefined attributes

const show = testFunc.bind(testObj);    //bound correctly
show();

// Object.prototype.cbind = Object.prototype.bind;

Object.prototype.cbind = function(...args) {
    console.log('calling cbind');
    // return this(args)
    return this;
    // return args[0];
    // return Object.prototype.bind;
};

const testShow = testFunc.cbind(testObj);
testShow;
testShow();