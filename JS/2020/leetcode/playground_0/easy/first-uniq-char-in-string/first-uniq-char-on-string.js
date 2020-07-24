var firstUniqChar = function (s) {

  let uniqueCharindex = -1;
  let charMap = {};
  let idx = 0;

  while(idx < s.length) {

    if (charMap[s[idx]] === undefined) {
      charMap[s[idx]] = 1;
    } else
      charMap[s[idx]]++;

    idx++;
  }

  let charMapArray = Object.keys(charMap);

  for (let i = 0; i < charMapArray.length; i++) {
    if(charMap[charMapArray[i]] === 1) {
      uniqueCharindex = s.indexOf(charMapArray[i]);
      break;
    }
  }



  return uniqueCharindex;

}

console.log('index of unique char is; ', firstUniqChar("loveleetcode"));
