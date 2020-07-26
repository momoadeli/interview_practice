/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = (A) => {

  if (!A || A.length === 0)
    throw new Error('invalid array');

  if (A.length === 1)
    return [A[0] * A[0]];

  let negs = [];
  let squares = [];

  // populate negs
  let numNegs = 0;
  let num = A[numNegs];

  while (A[numNegs] < 0) {
    negs.push(A[numNegs] * A[numNegs]);
    numNegs++;
  }

  let numPos = A.length - numNegs;

  // console.log('A: ', A);
  // console.log('negs: ', negs, ', numNegs: ', numNegs, ', numPos: ', numPos);

  if (numPos === 0) {
    for (let j = negs.length - 1; j >= 0; j--) {
      squares.push[negs[j] * negs[j]];
    }

    return squares;
  }

  if (numNegs === 0) {
    for (let j = 0; j < numPos; j++) {
      squares.push(A[j] * A[j])
    }

    return squares;
  }

  //make longer pos vs negs array 'loop' dominant
  let negsIndex = negs.length - 1;
  let posIndex = numNegs;

  while (posIndex < A.length && negsIndex >= 0) {

    if (A[posIndex] * A[posIndex] <= negs[negsIndex]) {
      squares.push(A[posIndex] * A[posIndex]);
      posIndex++;
    } else {
      squares.push(negs[negsIndex]);
      negsIndex--
    }
  }

  // console.log('squares: ', squares, ', posIndex: ', posIndex, ', negsIndex: ', negsIndex);

  if (posIndex < A.length) { // remaining positives
    // console.log('pos left over: ', A.length - posIndex + 1);
    while (posIndex < A.length) {
      squares.push(A[posIndex] * A[posIndex]);
      posIndex++;
    }
  }

  if (negsIndex >= 0) { // remaining negatives
    // console.log('negs leftover: ', negs.length - Math.abs(negsIndex) + 1);
    while (negsIndex >= 0) {
      squares.push(negs[negsIndex]);
      negsIndex--;
    }
  }

  return squares;

};

// console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));
