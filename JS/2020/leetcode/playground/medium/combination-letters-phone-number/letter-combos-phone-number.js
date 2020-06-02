var letterCombinations = function(digits) {

  const phoneMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }

  let combo = function(digitsSlice, curr = '') {

    if (digitsSlice.length === 0) {
      results.push(curr);
      return [];
    } else {
      let digit = digitsSlice[0];
      let alphaKeys = phoneMap[digit];
      for (let i = 0; i < alphaKeys.length; i++) {
        let letter = alphaKeys.slice(i, i + 1);
        combo(digitsSlice.slice(1), curr + letter)
      }
    }
  }

  let results = [];

  if (digits.length !== 0) combo(digits);

  return results;
}

console.log('letter combinations is: ', letterCombinations('234'));
