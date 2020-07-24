function highestProductOf3(arrayOfInts) {

  // Calculate the highest product of three numbers
  if (!arrayOfInts || arrayOfInts.length < 3)
    throw new Error(' must have at least 3 integers');

  // note: best to first consider the simpler case of
  // all the ints being positive. In this case just track
  // highest, highestProductOf2, and highestProductOf3.
  // Then extend thinking to negatives and also track
  // lowest and lowestProductOf2

    let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
    let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);

    let highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
    let lowestProductOf2 = arrayOfInts[0] * arrayOfInts[1];

    let highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

    for (let i = 2; i < arrayOfInts.length; i++) {

      let current = arrayOfInts[i];

      highestProductOf3 = Math.max(
        highestProductOf3,
        current * highestProductOf2,
        current * lowestProductOf2
      );

      highestProductOf2 = Math.max(
        highestProductOf2,
        current * highest,
        current * lowest
      );

      lowestProductOf2 = Math.min(
        lowestProductOf2,
        current * highest,
        current * lowest
      );

      highest = Math.max(highest, current);
      lowest = Math.min(lowest, current);
    }

    return highestProductOf3;

  // console.log('input: ', arrayOfInts);

  // arrayOfInts.sort( (a,b) => a - b);

  // // console.log('sorted input: ', arrayOfInts);


  // if (arrayOfInts[arrayOfInts.length - 1] < 0)
  //   return (arrayOfInts[arrayOfInts.length - 1] *
  //                     arrayOfInts[arrayOfInts.length - 2] *
  //                     arrayOfInts[arrayOfInts.length - 3]);

  // let twoNegs = []

  // for (let i = 0; i < arrayOfInts.length; i++) {
  //   if (arrayOfInts[i] < 0)
  //     twoNegs.push(arrayOfInts[i])

  //   if (twoNegs.length == 2) break;
  // }

  // if (twoNegs.length === 2) {
  //   return Math.max(twoNegs[0] * twoNegs[1] * arrayOfInts[arrayOfInts.length - 1]);
  // } else {
  //   return Math.abs(arrayOfInts[arrayOfInts.length - 1] *
  //                   arrayOfInts[arrayOfInts.length - 2] *
  //                   arrayOfInts[arrayOfInts.length - 3]);
  // }

}

// Tests

let desc = 'short array';
let actual = highestProductOf3([1, 2, 3, 4]);
let expected = 24;
assertEqual(actual, expected, desc);

desc = 'longer array';
actual = highestProductOf3([6, 1, 3, 5, 7, 8, 2]);
expected = 336;
assertEqual(actual, expected, desc);

desc = 'array has one negative';
actual = highestProductOf3([-5, 4, 8, 2, 3]);
expected = 96;
assertEqual(actual, expected, desc);

desc = 'array has two negatives';
actual = highestProductOf3([-10, 1, 3, 2, -10]);
expected = 300;
assertEqual(actual, expected, desc);

desc = 'array is all negatives';
actual = highestProductOf3([-5, -1, -3, -2]);
expected = -6;
assertEqual(actual, expected, desc);

desc = 'error with empty array';
const emptyArray = () => (highestProductOf3([]));
assertThrowsError(emptyArray, desc);

desc = 'error with one number';
const oneNumber = () => (highestProductOf3([1]));
assertThrowsError(oneNumber, desc);

desc = 'error with two numbers';
const twoNumber = () => (highestProductOf3([1, 1]));
assertThrowsError(twoNumber, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}
