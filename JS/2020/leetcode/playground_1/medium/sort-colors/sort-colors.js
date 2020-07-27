/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {

  // nums[0] = 9;
  console.log('nums: ', nums);

  let countingArray = [0, 0, 0];
  let result = [];

  // sweep thought array and put counts in counting array

  nums.forEach(num => {
    countingArray[num]++
  })

  countingArray.forEach((el, index) => {
    for (let i = 0; i < el; i++)
      result.push(index);
  })

  nums.forEach((el, index) => {
    nums[index] = result[index];
  })

  // Array.prototype.splice.apply(nums, [0, result.length].concat(result));

};

console.log(sortColors([2,0,2,1,1,0]));
