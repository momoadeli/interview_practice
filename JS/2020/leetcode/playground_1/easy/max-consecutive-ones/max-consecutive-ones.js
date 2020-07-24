const findMaxConsecutiveOnes = (nums) => {

  if (!nums || nums.length === 0)
    throw new Error('invalid array');

  if (nums.length === 1 && nums[0] === 1)
    return 1

  if (nums.length === 1 && nums[0] === 1)
    return 0

  let maxNum = 0;
  let i = 0;
  let count = 0;

  while (i < nums.length) {
    if (nums[i] === 1) {
      count++;
      maxNum = Math.max(maxNum, count);
    } else {
      maxNum = Math.max(maxNum, count);
      count = 0;
    }

    i++;
  }
  return maxNum;
}

console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]));
