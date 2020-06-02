var moveZeroes = function (nums) {

  if (!nums || nums.length === 0) return [];

  let moveCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[moveCount] = nums[i];
      moveCount++;
    }
  }

  for (let i = moveCount; i < nums.length; i++) {
    nums[i] = 0
  }

  return nums;

}

console.log('moved zeros is: ', moveZeroes([0, 1, 0, 3, 12]));
