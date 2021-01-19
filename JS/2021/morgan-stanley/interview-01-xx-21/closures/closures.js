function adder(x) {

    return function(y) {
        return x + y;
    };
}

const adder5 = adder(5);
console.log(adder5(10));

// OR BETTER

console.log(adder(3)(5));

for (var i = 0; i < 10; i++) {

    setTimeout(() => console.log(`i is ${i}`), 10);
}

for (let i = 0; i < 10; i++) {
    setTimeout(() => console.log(`i is ${i}`), 10);
}