const longestPalindrome = s => {

  if (!s) return '';
  if (s.length === 0) return '';

  let maxPalindromeLength = 0;
  let maxPalindromeStr = '';

  const isPalindrome = str => {
    let flgIsPalindrome = true;

    let left = 0;
    let right = str.length - 1;

    while (left <= right) {
      if (str[left] !== str[right])
        return false;

      left++;
      right--;
    }

    return flgIsPalindrome;
  }


  const palindrome = str => {

    let i = 1;

    if (str.length === 0 || maxPalindromeLength >= str.length)
      return;
    else {
      let palStr = str[0];

      while (i <= str.length) {
        if (isPalindrome(palStr)) {

          if (palStr.length > maxPalindromeLength) {
            maxPalindromeLength = palStr.length;
            maxPalindromeStr = palStr.slice();
          }
        }

        i++;
        palStr = str.substring(0, i);
      }

      palindrome(str.substring(1, str.length));
    }

  }

  palindrome(s);

  return maxPalindromeStr;

}

console.log('max palindrome is: ', longestPalindrome('babad'));
