function birthdayCakeCandles(ar) {

  let maxCandles = 0;

  ar = ar.sort( (a, b) => b - a);

  const maxValue = ar[0];
  let arrIndex = 0;

  while( arrIndex <= ar.length -1 ) {
      if (ar[arrIndex] === maxValue) {
          maxCandles++;
      } else {
          break;
      }

      arrIndex++;
  }

  return maxCandles;
}

console.log('max num candles is: ' + birthdayCakeCandles(('82 49 82 82 41 82 15 63 38 25').split(' ').map(arTemp => parseInt(arTemp, 10))));
