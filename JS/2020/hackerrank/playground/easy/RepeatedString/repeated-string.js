
function repeatedString(str, n) {

  let numStringAs = 0;

  let numSubstrings = Math.floor(n/str.length);

  let lengthRemainderSubstring = n % str.length;

  let numRemainderAs = 0;

  Array.from(str.substring(0, lengthRemainderSubstring)).forEach( el => {
    if (el === 'a') numRemainderAs++
  });


  Array.from(str).forEach(el => {
    if (el === 'a') numStringAs++
  });

  return (numSubstrings * numStringAs + numRemainderAs);

}

console.log('repeated string is: ' + repeatedString('aab', 882787))
