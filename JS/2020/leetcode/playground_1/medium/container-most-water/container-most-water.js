/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // Runtime: 64 ms -- 2 Pointer-like solution

  if (!height) return -1;

  let maxArea = -1;

  let lo = 0;
  let hi = height.length - 1;

  while (lo < hi) {
    let currHeight = Math.min(height[lo], height[hi])
    let width = hi - lo;
    let area = currHeight * width;

    maxArea = Math.max(maxArea, area);

    if (height[lo] <= height[hi])
      lo++;
    else
      hi--;
  }

  return maxArea;

};

console.log('max volume is: ' + maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
