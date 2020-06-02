
/**
 *
 * IDENTICAL to leetcode valid-parentheses
 */
var isValid = function (s) {

  if (!s || s.length === 0) return true;

  if (s.length === 1) {
    if (
      s[0] !== '(' &&
      s[0] !== ')' &&
      s[0] !== '{' &&
      s[0] !== '}' &&
      s[0] !== '[' &&
      s[0] !== ']'
    ) {
      return true;
    } else
      return false;
  }

  let prevOpenBrackets = [];

  for (let i = 0; i < s.length; i++) {

    let cnt = 0;

    switch (s[i]) {
      case '(':
      case '{':
      case '[':
        prevOpenBrackets.push(s[i]);
        break;
      case ')':
        if (prevOpenBrackets[prevOpenBrackets.length - 1] !== '(' || prevOpenBrackets.length === 0)
          return false;
        prevOpenBrackets.pop();
        break;
      case '}':
        if (prevOpenBrackets[prevOpenBrackets.length - 1] !== '{' || prevOpenBrackets.length === 0)
          return false;
        prevOpenBrackets.pop();
        break;
      case ']':
        if (prevOpenBrackets[prevOpenBrackets.length - 1] !== '[' || prevOpenBrackets.length === 0)
          return false;
        prevOpenBrackets.pop();
        break;
    }
  }

  return prevOpenBrackets.length === 0 ? true : false;

}

console.log('isValid: ', isValid('{[()]}'));
console.log('isValid: ', isValid('{[(])}'));
console.log('isValid: ', isValid('{{[[(())]]}}'));


