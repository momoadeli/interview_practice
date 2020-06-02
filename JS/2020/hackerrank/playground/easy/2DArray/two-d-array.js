
function initializeData() {


  const b = `1 1 1 0 0 0 0 1 0 0 0 0 1 1 1 0 0 0 0 0 2 4 4 0 0 0 0 2 0 0 0 0 1 2 4 0`.split(' ');

  const dim = Math.sqrt(b.length);

  const array = new Array(dim).fill(0).map(() => new Array(dim).fill(0));

  var row = -1;
  var col = -1;

  b.forEach((el, i) => {

    if (i % dim === 0) {
      row++;
      col = 0
    } else {
      col++;
    }

    array[row][col] = JSON.parse(el);

  })

  return array;
}

function sumHourGlassAt(arr, row, col) {
  let sum = 0;

  sum = (arr[row][col - 1] + arr[row][col] + arr[row][col + 1]) +
    arr[row + 1][col] +
    (arr[row + 2][col - 1] + arr[row + 2][col] + arr[row + 2][col + 1]);
  return sum;
}

function hourGlassSum(arr) {
  const maxRows = 4;
  const maxCols = 4;

  const sumsArray = [];

  for (let row = 0; row <= maxRows - 1; row++) {
    for (let col = 1; col <= maxCols; col++) {
      sumsArray.push(sumHourGlassAt(arr, row, col));
    }
  }

  return sumsArray.sort((a, b) => a - b)[sumsArray.length - 1];

}


const array = initializeData();

console.log('max hour glass sum is: ' + hourGlassSum(array));

