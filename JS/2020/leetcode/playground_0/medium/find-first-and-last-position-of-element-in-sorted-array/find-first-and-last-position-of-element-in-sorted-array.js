var searchRange = function (nums, target) {

  if (!nums || nums.length === 0 || target < nums[0] || target > nums[nums.length - 1]) return [-1, -1];

  let range = [-1, -1];

  // scan from left
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) break;
    else if (nums[i] === target) {
      range[0] = i;
      break;
    }
  }

  // check if anythings was found else return nothing
  if (range[0] === -1) return range;

  // scan from right
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === target) {
      range[1] = i;
      break;
    }
  }

  return range;
}

console.log('searched range is: ', searchRange([5, 7, 7, 8, 8, 10], 8));
