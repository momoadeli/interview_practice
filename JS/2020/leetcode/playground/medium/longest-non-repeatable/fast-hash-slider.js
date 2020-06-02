var lengthOfLongestSubstring = s => {
  const visited = new Set();
  let leftIdxSliderWindow = 0;
  let rightIdxSliderWindow = 0;
  let res = 0;

  // use sliding window
  while (rightIdxSliderWindow < s.length) {
    const currentChar = s.charAt(rightIdxSliderWindow);
    // not visited
    if (!visited.has(currentChar)) {
      visited.add(currentChar);
      res = Math.max(res, rightIdxSliderWindow - leftIdxSliderWindow + 1);
      rightIdxSliderWindow++;
    } else {
      visited.delete(s.charAt(leftIdxSliderWindow));
      leftIdxSliderWindow++;
    }
  }

  return res;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
