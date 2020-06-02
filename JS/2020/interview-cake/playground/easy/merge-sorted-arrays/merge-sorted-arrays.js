function mergeArrays(myArray, alicesArray) {

  // Combine the sorted arrays into one large sorted array

  if (!myArray || myArray.length === 0 && alicesArray) return alicesArray;
  if (!alicesArray || alicesArray.length === 0 && myArray) return myArray;

  let merged = [];
  let idxMyArray = 0;
  let idxAlicesArray = 0 ;

  while (idxMyArray < myArray.length && idxAlicesArray < alicesArray.length) {
    let diff = myArray[idxMyArray] - alicesArray[idxAlicesArray];

    if (diff <= 0) {
      merged.push(myArray[idxMyArray]);
      idxMyArray++;
    } else {
      merged.push(alicesArray[idxAlicesArray]);
      idxAlicesArray++;
    }
  }

  if (idxMyArray < myArray.length) {
    merged = merged.concat(myArray.slice(idxMyArray));
  }

  if (idxAlicesArray < alicesArray.length) {
    merged = merged.concat(alicesArray.slice(idxAlicesArray))
  }

  return merged;
}

// Tests

let desc = 'both arrays are empty';
let actual = mergeArrays([], []);
let expected = [];
assertDeepEqual(actual, expected, desc);

desc = 'first array is empty';
actual = mergeArrays([], [1, 2, 3]);
expected = [1, 2, 3];
assertDeepEqual(actual, expected, desc);

desc = 'second array is empty';
actual = mergeArrays([5, 6, 7], []);
expected = [5, 6, 7];
assertDeepEqual(actual, expected, desc);

desc = 'both arrays have some numbers';
actual = mergeArrays([2, 4, 6, 8, 10, 12], [1, 3, 7]);
expected = [1, 2, 3, 4, 6, 7, 8, 10, 12];
assertDeepEqual(actual, expected, desc);

desc = 'arrays are different lengths';
actual = mergeArrays([2, 4, 6, 8], [1, 7]);
expected = [1, 2, 4, 6, 7, 8];
assertDeepEqual(actual, expected, desc);

desc = 'arrays are different lengths 2';
actual = mergeArrays([2, 4, 6, 8, 11, 15], [-3, -1, 0, 1, 7]);
expected = [-3, -1, 0, 1, 2, 4, 6, 7, 8, 11, 15];
assertDeepEqual(actual, expected, desc);

desc = 'arrays are different lengths 3';
actual = mergeArrays([-3, -1, 0, 1, 7], [2, 4, 6, 8, 11, 15]);
expected = [-3, -1, 0, 1, 2, 4, 6, 7, 8, 11, 15];
assertDeepEqual(actual, expected, desc);

function assertDeepEqual(a, b, desc) {
  const aStr = JSON.stringify(a);
  const bStr = JSON.stringify(b);
  if (aStr !== bStr) {
    console.log(`${desc} ... FAIL: ${aStr} != ${bStr}`);
  } else {
    console.log(`${desc} ... PASS`);
  }
}
