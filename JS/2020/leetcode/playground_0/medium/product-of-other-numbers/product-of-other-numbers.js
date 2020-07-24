function getProductsOfAllIntsExceptAtIndex(intArray) {

  if (!intArray || intArray.length < 3)
    throw new Error('must have at least 3 integers');

  // although original algo works, it's only O(n^2). There's a
  // better O(n) algo:
  // simply accumulate previous and next products at each
  // index (see explanation)

  let productsExceptAtIndex = [];

  let currentProduct = 1;

  // first get products BEFORE index

  for (let i = 0; i < intArray.length; i++) {

    productsExceptAtIndex[i] = currentProduct;
    currentProduct *= intArray[i];

  }

  // second add products AFTER index

  currentProduct = 1

  for (let i = intArray.length - 1; i >= 0; i--) {

    productsExceptAtIndex[i] *= currentProduct;  // <-- updating results array
    currentProduct *= intArray[i]

  }

  return productsExceptAtIndex;

  // Make a list of the products

  // console.log('input: ', intArray);

  // let products = [];

  // for (let i = 0; i < intArray.length; i++) {
  //   // get prev prods

  //   let currentProduct = 1;

  //   for (let p = 0; p < i; p++) {
  //     console.log('prev: current/intArray', currentProduct, '/', intArray[p]);
  //     currentProduct *= intArray[p];
  //   }

  //   //get post prods
  //   for (let s = i + 1; s < intArray.length; s++) {
  //     console.log('post: current/intArray', currentProduct, '/', intArray[s]);
  //     currentProduct *= intArray[s];
  //   }

  //   products.push(currentProduct);

  // }

  // return products;
}

// Tests

let desc = 'short array';
let actual = getProductsOfAllIntsExceptAtIndex([1, 2, 3]);
let expected = [6, 3, 2];
assertArrayEquals(actual, expected, desc);

desc = 'longer array',
actual = getProductsOfAllIntsExceptAtIndex([8, 2, 4, 3, 1, 5]);
expected = [120, 480, 240, 320, 960, 192];
assertArrayEquals(actual, expected, desc);

desc = 'array has one zero',
actual = getProductsOfAllIntsExceptAtIndex([6, 2, 0, 3]);
expected = [0, 0, 36, 0];
assertArrayEquals(actual, expected, desc);

desc = 'array has two zeros';
actual = getProductsOfAllIntsExceptAtIndex([4, 0, 9, 1, 0]);
expected = [0, 0, 0, 0, 0];
assertArrayEquals(actual, expected, desc);

desc = 'one negative number';
actual = getProductsOfAllIntsExceptAtIndex([-3, 8, 4]);
expected = [32, -12, -24];
assertArrayEquals(actual, expected, desc);

desc = 'all negative numbers';
actual = getProductsOfAllIntsExceptAtIndex([-7, -1, -4, -2]);
expected = [-8, -56, -14, -28];
assertArrayEquals(actual, expected, desc);

desc = 'error with empty array';
const emptyArray = () => (getProductsOfAllIntsExceptAtIndex([]));
assertThrowsError(emptyArray, desc);

desc = 'error with one number';
const oneNumber = () => (getProductsOfAllIntsExceptAtIndex([1]));
assertThrowsError(oneNumber, desc);

function assertArrayEquals(a, b, desc) {
  const arrayA = JSON.stringify(a);
  const arrayB = JSON.stringify(b);
  if (arrayA !== arrayB) {
    console.log(`${desc} ... FAIL: ${arrayA} != ${arrayB}`)
  } else {
    console.log(`${desc} ... PASS`);
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
