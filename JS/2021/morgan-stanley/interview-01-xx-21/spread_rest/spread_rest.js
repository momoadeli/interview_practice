let myArr = ['1', '2', '3'];

let myArrCopy = [...myArr];

myArrCopy[2] = '4';

console.log('end array spread');

const myObj = { color: 'red', type: 'truck' };

const myObjCopy = {...myObj };

console.log('end object spread');