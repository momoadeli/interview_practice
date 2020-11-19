
// first write a simple closure to see how var that is closed on shows
const testClosure_I = function() {
    let cache = 1;

    return function() {
        console.log('cache is ', cache);
    }
}

const tc1 = testClosure_I();

tc1();

//  then pass an argument to the closure and update internal var

const testClosure_II = function() {

    let cache = 0;

    return function(...args) {
        cache = cache || 0;
        cache += args[0];
        console.log('in testClosure_II cache accumulator is ', cache);
    }
}

const tc2 = testClosure_II()

tc2(5)
tc2(3)

//  now pass a function as an argument and manipulate the cache

const testClosure_III = function(func) {

    let cache;

    return function(...args) {
        cache = cache || 0;
        console.log(func);
        cache += args[0]
        console.log('in testClosure_III cache accumulator is ', cache);

        return func;
    }
}

const tc3 = testClosure_III(function(num) {
    console.log('inside func. num is ', num)
    num *= 2;
});

tc3(10);

tc3(10)(3);