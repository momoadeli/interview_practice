var numDecodings = function (s) {

  let memo = new Map();

  let numDecodingsMemo = function (i, lStr) {

    // if end of string then decode was successful
    if (i === lStr.length) return 1;

    // char '0' means decode failed
    if (lStr.charAt(i) === '0') return 0;

    // if reached this far and 1 char left then can be decoded
    if (i === lStr.length - 1) return 1;

    // if this position has already been visited the return prev answer
    if (memo.has(i)) return memo.get(i);

    // get 1 char decode answer:
    let ans = numDecodingsMemo(i + 1, lStr);

    // get 2 char decode answer but make sure valid decodeable
    if(parseInt(lStr.substring(i, i + 2)) <= 26) {
      ans += numDecodingsMemo(i + 2, lStr)
    }

    // successfully decoded to this point. save and return ans

    memo.set(i, ans);

    return ans;

  }

  if (s === undefined || s.length === 0) return 0;

  return numDecodingsMemo(0, s);

}

console.log('decode ways for 226 is: ', numDecodings("226"));
console.log('another num decode ways for 12 is: ', numDecodings("12"));
