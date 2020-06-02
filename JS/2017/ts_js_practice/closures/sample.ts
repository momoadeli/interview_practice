
// 'closure' simple definition: an inner function ('closure') has access to outer scope variables:
// OR
// A closure is a function defined inside another function (called the parent function), 
// and has access to variables that are declared and defined in the parent function scope.
function outerFunction () {

    var outerFunctionVariable = 1;

    function innerFunction() {
        console.log('outerFunctionVariable: ', outerFunctionVariable);
    }

    innerFunction();
}

console.log('simple closure:');
outerFunction();

//More interestingly, the inner function has access to the outer variable 
//even after the outer function has completed running
//
function outerFunctionII() {

 var outerFunctionVariableII = 1;
 return {
     increment: function() {outerFunctionVariableII ++},
     getOutVar: function() { 
         console.log('outerFunctionVariableII: ', outerFunctionVariableII);
         return outerFunctionVariableII 
     }
 }
}

var outFuncII = outerFunctionII();

console.log('closure when outer function is complete yet inner function has access to outer`s scope: ')
outFuncII.increment();
outFuncII.getOutVar();

console.log(`however, there are times a  closure works too well!
             Below the loop is finished and i is 10 
             when the inner function 'closes' on the outer i variable.
             so it print 10, 10 times: `);

for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log('closured loop: ', i);
        document.write("<div> closured loop:" + i + "</div>");
    }, 10 * i);
}

console.log('there three possible solutions:');
console.log(`I. use an IIFE and immediately invoke the setTimeOut
            on each loop and pass i to it:  `);

for (var i = 0; i < 10; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
            document.write("<div>" + i + "</div>");
        }, 100 * i);
    })(i);
}

console.log(`II. variation of IIFE and immediately invoke the setTimeOut
            on each loop and pass i to it:  `);

var _loop_1 = function (i_1: any) {
    setTimeout(function () {
        console.log(i_1);
    }, 100 * i_1);
};
for (var i_1 = 0; i_1 < 10; i_1++) {
    _loop_1(i_1);
}

console.log(`III: ...or use a 'let' in the loop variable to set the scope.
            the reason this works is 'let' within the scope of the for while var' is 
            in the scope outside of the for loop! so let's create a NEW scope per loop.`);

for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
        document.write("<div>" + i + "</div>");
    }, 10 * i);
}

class Tire {
    get() {return 'type';}
}

class Car {

    tire: Tire = null;

    getMo() { this.tire = null}
}

var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo); // defined = 'bar'
        console.log("outer func:  self.foo = " + self.foo); // defined = 'bar'
        (function() {
            console.log("inner func:  this.foo = " + this.foo); // undefined
            console.log("inner func:  self.foo = " + self.foo); // defined = 'bar'
        }());
    }
};

myObject.func();

// var 
// var mo_loop = function (mo_i: any) {
//     setTimeout(function() {
//         console.log('mo_loop repeat example practice');
//     }, 100);
// }

// for (var y = 0; y < 10; ++y) {
//     // code...
//     mo_loop(y);
// }
