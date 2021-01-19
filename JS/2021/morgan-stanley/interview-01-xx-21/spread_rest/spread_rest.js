// spread
const myArr = ['1', '2', '3'];

const myArrCopy = [...myArr];

myArrCopy[2] = '4';

console.log('end array spread');

const myObj = { color: 'red', type: 'truck' };

const myObjCopy = {...myObj };

console.log('end object spread');

// rest arr

const updateArray = ([...arr]) => {
    console.log(`input arr is ${arr}`);

    arr[2] = 5;

    return arr;
};

const updatedArray = updateArray(myArrCopy);

console.log(`updated arr is ${updatedArray}`);

// rest afunction args

const myArgsFunc = (...args) => {

    for (let arg of args) {
        console.log(`arg 'in' is ${arg}`);
    }

    for (let arg of args) {
        console.log(`arg 'of' is ${arg}`);
    }

}

myArgsFunc(5, 3, 7, 4, 0)