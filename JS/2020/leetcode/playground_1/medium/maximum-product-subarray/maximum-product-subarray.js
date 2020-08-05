/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = nums => {

  if (nums.length < 1) return 0;

  if (nums.length === 1) return nums[0];

  let minSoFar = nums[0];
  let maxSoFar = nums[0];
  let maxProduct = maxSoFar;

  for (let i = 1; i < nums.length; i++) {

    let curr = nums[i];
    let tempMax = Math.max(curr, Math.max(maxSoFar * curr, minSoFar * curr));
    minSoFar = Math.min(curr, Math.min(maxSoFar * curr, minSoFar * curr));

    maxSoFar = tempMax;

    maxProduct = Math.max(maxSoFar, maxProduct);

  }

  return maxProduct;
};
