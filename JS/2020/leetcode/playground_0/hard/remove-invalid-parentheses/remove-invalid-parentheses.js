var removeInvalidParentheses = function (s) {

  let results = [];
  let max = 0;

  let recurse = function (str, currExpression, countLeft, maxLeft) {

    // array end reached
    if (str === "") {

      // check when num left and rights match AND there is an expression
      if (countLeft === 0 && currExpression !== "") {

        // set max if maxLeft greater
        if (maxLeft > max)
          max = maxLeft;

        // if max reached and curr expression not in results, add it to results
        if (max === maxLeft && results.indexOf(currExpression) === -1)
          results.push(currExpression);
      }
      return;
    } else {

      if (str[0] !== '(' && str[0] !== ')') {
        // non parens. just add char to expression and recurse
        recurse(str.slice(1), currExpression + str[0], countLeft, maxLeft);
      } else {
        if (str[0] === '(') {
          //assume valid char recurse: can be considered part of final expression
          recurse(str.slice(1), currExpression + str[0], countLeft + 1, maxLeft + 1);
          //assume invalid char recurse: ignore it and it cannot be part of final expression
          recurse(str.slice(1), currExpression, countLeft, maxLeft);
        } else if (str[0] === ')') {

          if (countLeft > 0) {
            //assume valid char recurse: can be considered part of final expression
            recurse(str.slice(1), currExpression + str[0], countLeft - 1, maxLeft);
          }
          //assume invalid char recurse: ignore it and it cannot be part of final expression
          recurse(str.slice(1), currExpression, countLeft, maxLeft);

        }
      }
    }
  }

  recurse(s, "", 0, 0);

  return results.length === 0 ? [''] : results;

}

console.log('minimum valid expressions are: ', removeInvalidParentheses("()())()"));
