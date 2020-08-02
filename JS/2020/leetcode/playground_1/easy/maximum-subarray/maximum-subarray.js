const maxSubArray = nums => {

  let currSum = nums[0], maxSum = nums[0];

  for (let i = 0; i < nums.length; i++ ) {
    currSum = Math.max(nums[i], nums[i] + currSum)
    maxSum = Math.max(maxSum, currSum)
  }

  return maxSum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
