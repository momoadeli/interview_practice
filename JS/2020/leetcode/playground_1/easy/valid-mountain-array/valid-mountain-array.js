/**
 * @param {number[]} A
 * @return {boolean}
 */
const validMountainArray = (A) => {

  if (!A || A.length < 3) {
    return false;
  }

  let numIncreases = 0
  let numDecreases = 0;

  let i = 0;

  while (i < A.length - 1) {

    if (numDecreases === 0 && A[i + 1] - A[i] > 0)
      numIncreases++;

    if (numIncreases > 0 && A[i + 1] - A[i] < 0)
      numDecreases++;

    i++;

    i++;
  }

  if (numDecreases === 0 || numIncreases === 0) return false;

  return numIncreases + numDecreases === A.length - 1 ? true : false;

};

console.log(validMountainArray([0, 1, 2, 1, 2]));
