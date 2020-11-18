const myObj = {name : 'flower', color: 'red'};


const myTestFunction = function (name) {
    console.log(`it is a ${this.name} and colored ${this.color}`)
}

myTestFunction.call(myObj, 'rose');

myTestFunction.apply(myObj, ['red']);

const show = myTestFunction.bind(myObj, 'red');

show();
