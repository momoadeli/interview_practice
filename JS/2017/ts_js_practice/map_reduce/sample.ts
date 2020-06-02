// NOTE: map doesn't change original array
// 
var fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

var celcius = fahrenheit.map( (elem, i , array) => {
    return {celcius: Math.round((elem - 32) * 5 / 9) + 'c'};
}); 

console.log(celcius);
var maxCallback = ( acc: any, cur: any ) => Math.max( acc.x, cur.x );
var maxCallback2 = ( max: any, cur: any ) => Math.max( max, cur );
// map/reduce; better solution, also works for empty arrays
var newMapReduce = [ { x: 22 }, { x: 42 } ].map( el => el.x )
.reduce( maxCallback2, -Infinity );
console.log(newMapReduce);

// flatten array of ARRAYS!!
var unFlattened = [[0, 1], [2, 3], [4, 5]];

var flattened = 
    unFlattened
    .reduce( (accumulator, currentVal, currentIndex, currentArray) => {

        return accumulator.concat(currentVal);
}, [-2, -1]);

console.log(flattened);

//counting instances of an object
 
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice', 'Bob'];

interface Foo {
  [key:string]: number
}
var countArray = names.reduce( (accumulator: Foo, currentVal: any, currentIndex, currentArray) => {

        if (currentVal in accumulator) {
            accumulator[currentVal]++;
        } else {
            accumulator[currentVal] = 1;
        }
        return accumulator;
}, {});

console.log(countArray);


