function miniMaxSum(arr) {

  let sortedArr = arr.sort((a, b) => a - b);

  let beginningPart = arr.slice(0, 4);
  let endingPart = arr.slice(1, 5);
  let beginningSum = 0;
  let endingSum = 0;

  beginningPart.forEach(el => {
    beginningSum += el;
  })

  endingPart.forEach(el => {
    endingSum += el;
  })

  console.log(beginningSum + ' ' + endingSum);

}

miniMaxSum('256741038 623958417 467905213 714532089 938071625'.split(' ').map(arrTemp => parseInt(arrTemp, 10)))
