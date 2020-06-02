function hasPalindromePermutation(theString) {

  // Check if any permutation of the input is a palindrome
  if (!theString || theString.length === 0) return true;

  let checkSet = new Map();

  for (let i = 0; i < theString.length; i++) {
    if (!checkSet.has(theString[i])) {
      checkSet.set(theString[i], 1)
    } else {
      let count = checkSet.get(theString[i])
      checkSet.set(theString[i], ++count);
    }
  }

  let valsArray = Array.from(checkSet.values());
  let oddCount = 0;

  for (let i = 0; i < valsArray.length; i++) {
    let val = valsArray[i];
    if (val % 2 !== 0) oddCount++;
    if (oddCount > 1) return false;
  }

  return true;

}

// Tests

let desc = 'permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcbcd'), true, desc);

desc = 'permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabccbdd'), true, desc);

desc = 'no permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcd'), false, desc);

desc = 'no permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabbcd'), false, desc);

desc = 'empty string';
assertEqual(hasPalindromePermutation(''), true, desc);

desc = 'one character string ';
assertEqual(hasPalindromePermutation('a'), true, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
