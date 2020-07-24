function lengthOfLongestSubstring(s) {
  let visited = new Set();
  let leftIdxSliderWindow = 0;
  let rightIdxSliderWindow = 0;
  let maxLength = 0;

  // return 0;

  while (rightIdxSliderWindow < s.length) {

      const currChar = s.charAt(rightIdxSliderWindow);

      if (!visited.has(currChar)) {
        visited.add(currChar);
        maxLength = Math.max(maxLength, rightIdxSliderWindow - leftIdxSliderWindow + 1)
        rightIdxSliderWindow++;
      } else {
        visited.delete(s.charAt(leftIdxSliderWindow));
        leftIdxSliderWindow++;
      }
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
