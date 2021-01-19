let create2DArray = (n, initVal) => {

    return new Array(n).fill(initVal).map((el) => el = new Array(n).fill(initVal));

}

let twoDArray = create2DArray(12, null);

console.log('2d array is: ', twoDArray);