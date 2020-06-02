var fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
var celcius = fahrenheit.map(function (elem, i, array) {
    return { celcius: Math.round((elem - 32) * 5 / 9) + 'c' };
});
console.log(celcius);
var maxCallback = function (acc, cur) { return Math.max(acc.x, cur.x); };
var maxCallback2 = function (max, cur) { return Math.max(max, cur); };
var newMapReduce = [{ x: 22 }, { x: 42 }].map(function (el) { return el.x; })
    .reduce(maxCallback2, -Infinity);
console.log(newMapReduce);
var unFlattened = [[0, 1], [2, 3], [4, 5]];
var flattened = unFlattened
    .reduce(function (accumulator, currentVal, currentIndex, currentArray) {
    return accumulator.concat(currentVal);
}, [-2, -1]);
console.log(flattened);
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice', 'Bob'];
var countArray = names.reduce(function (accumulator, currentVal, currentIndex, currentArray) {
    if (currentVal in accumulator) {
        accumulator[currentVal]++;
    }
    else {
        accumulator[currentVal] = 1;
    }
    return accumulator;
}, {});
console.log(countArray);
//# sourceMappingURL=sample.js.map