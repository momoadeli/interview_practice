function reverse(arrayOfChars) {

  if (!arrayOfChars || arrayOfChars.length === 0) return [];
  if (arrayOfChars.length === 1) arrayOfChars;

  let start = 0;
  let end = arrayOfChars.length - 1
  let half = Math.floor((end - start) / 2);

  let i = 0;

  while (i <= half) {
    let currStart = arrayOfChars[start + i];
    let currEnd = arrayOfChars[end - i];
    arrayOfChars[start + i] = currEnd;
    arrayOfChars[end - i] = currStart;
    i++
  }

  return arrayOfChars;

}

// Tests

let desc = 'empty string';
let input = ''.split('');
reverse(input);
let actual = input.join('');
let expected = '';
assertEqual(actual, expected, desc);

desc = 'single character string';
input = 'A'.split('');
reverse(input);
actual = input.join('');
expected = 'A';
assertEqual(actual, expected, desc);

desc = 'longer even string';
input = 'ABCDE'.split('');
reverse(input);
actual = input.join('');
expected = 'EDCBA';
assertEqual(actual, expected, desc);

desc = 'longer odd string';
input = 'ABCDEF'.split('');
reverse(input);
actual = input.join('');
expected = 'FEDCBA';
assertEqual(actual, expected, desc);

// desc = 'leetcode longer string';
// input = ["A", " ", "m", "a", "n", ",", " ", "a", " ", "p", "l", "a", "n", ",", " ", "a", " ", "c", "a", "n", "a", "l", ":", " ", "P", "a", "n", "a", "m", "a"];
// reverse(input);
// actual = input.join('');
// expected = 'FEDCBA';
// assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
