function reverseWords(message) {

  // Decode the message by reversing the words
  // strategy: reverse the entire array then reverse substrings \

  if (!message || message.length === 0) return [];

  var reverseArray = (arr, start, end) => {

    let i = 0;

    let mid = Math.floor((end - start) / 2);

    while (i <= mid) {

      let currStart = arr[start + i];
      let currEnd = arr[end - i];

      arr[start + i] = currEnd;
      arr[end - i] = currStart;

      i++;
    }

  }

  // first reverse entire array
  reverseArray(message, 0, message.length - 1)

  // now reverse each substring

  let start = 0;
  let end = message.indexOf(' ', start);

  do {

    if (end !== -1) {
      reverseArray(message, start, end - 1);
      start = end + 1;
      end = message.indexOf(' ', start + 1);
    } else {
      reverseArray(message, start, message.length - 1);
      break;
    }
  } while (true);

}

// Tests

let desc = 'one word';
let input = 'vault'.split('');
reverseWords(input);
let actual = input.join('');
let expected = 'vault';
assertEqual(actual, expected, desc);

desc = 'two words';
input = 'thief cake'.split('');
reverseWords(input);
actual = input.join('');
expected = 'cake thief';
assertEqual(actual, expected, desc);

desc = 'three words';
input = 'one another get'.split('');
reverseWords(input);
actual = input.join('');
expected = 'get another one';
assertEqual(actual, expected, desc);

desc = 'multiple words same length';
input = 'rat the ate cat the'.split('');
reverseWords(input);
actual = input.join('');
expected = 'the cat ate the rat';
assertEqual(actual, expected, desc);

desc = 'multiple words different lengths';
input = 'yummy is cake bundt chocolate'.split('');
reverseWords(input);
actual = input.join('');
expected = 'chocolate bundt cake is yummy';
assertEqual(actual, expected, desc);

desc = 'empty string';
input = ''.split('');
reverseWords(input);
actual = input.join('');
expected = '';
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
