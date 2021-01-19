const myObj = { color: 'red', type: 'truck' };

const { color, type } = myObj;

console.log(`color is ${color} and type is ${type}`);

const { color: myColor, type: myType } = myObj;

console.log(`myColor is ${myColor} and myType is ${myType}`);