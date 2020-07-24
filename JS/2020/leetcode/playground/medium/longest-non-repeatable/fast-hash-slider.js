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
// !!!! MY OWN SOLUTION. Speed equal or close !!!!!

// var lengthOfLongestSubstring = function (s) {

//   if (!s || s.length === 0) return 0;
//   if (s.length === 1) return 1;

//   let maxSubstr = '';
//   let slideStr = '';
//   let substrMap = new Map()

//   let startSlide = 0;
//   let endSlide = 0;

//   while (endSlide < s.length) {

//     if (!substrMap.has(s[endSlide])) {
//       substrMap.set(s[endSlide]);
//       slideStr = slideStr + s[endSlide];
//     } else {
//       if (slideStr.length > maxSubstr.length)
//         maxSubstr = slideStr;
//       //find the last index of the occurence in slideStr and move startSlide to ahead of it
//       let lastIndex = slideStr.lastIndexOf(s[endSlide]);
//       startSlide = lastIndex + 1;
//       slideStr = slideStr.substr(startSlide);
//       slideStr = slideStr + s[endSlide];
//     }

//     endSlide++;
//   }

//   return maxSubstr.length > slideStr.length ? maxSubstr.length : slideStr.length;

// };

console.log(lengthOfLongestSubstring("abcabcbb"));
