// spread and rest operations

const twoDArray = new Array(5).fill(0).map( el => el = new Array(5).fill(0));

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let concat12_0 = [...arr1, ...arr2];

console.log('concat12 is: ', concat12_0);

let cloneConcat12 = [...concat12_0];

cloneConcat12[0] = 'z';

let test = [, ...arr2];
console.log(test);

// iterables to array

let str = '1234';

[...str].forEach(el => {
  console.log(el);
});
