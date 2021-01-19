const myObj = { color: 'red', type: 'car' };

function myFunc(year, model) {
    console.log(`this is ${this} and color is ${year} and typ[e is ${model}`);
}

myFunc.apply(myObj, ['1960', 'apply']);

myFunc.call(myObj, '1970', 'call');

let myF = myFunc.bind(myObj, '1980', 'bind');

myF();

const myFuncaRROW = (color, type) => {
    console.log('this is:', this, color, type);
};

myFuncArrow.apply(myObj, ['blue', 'truck']);

myFuncArrow.call(myObj, 'blue', 'truck');