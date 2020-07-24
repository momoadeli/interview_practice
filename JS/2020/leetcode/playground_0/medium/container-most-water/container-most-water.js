let maxArea = heights => {
  // Runtime: 64 ms -- 2 Pointer-like solution
  console.log(heights);

  let left = 0;
  let right = heights.length - 1;

  let maxArea = -1;

  while (left < right) {
    let lHeight = heights[left];
    let rHeight = heights[right];
    let w = right - left;
    let currentMaxArea = Math.min(lHeight, rHeight) * w;

    maxArea = Math.max(maxArea, currentMaxArea);

    if (lHeight < rHeight) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

console.log('max volume is: ' + maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
