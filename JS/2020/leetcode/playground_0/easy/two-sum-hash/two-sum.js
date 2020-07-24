/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// examples are:
// [2,7,11,15]. 9
// [-1, -2, -3, -4, -5], -8
// [3, 3], 6
// [5, 75, 25], 100
// [0, 200, -195], 5

var twoSum = function (nums, target) {

  //      BRUTE FORCE

  //     let indices = []
  //     let numsIndex = 0;

  //     while (numsIndex < nums.length - 1) {

  //         let complimentIndex = nums.indexOf((target - nums[numsIndex]), numsIndex + 1);

  //         if (complimentIndex !== -1) {
  //             indices.push(numsIndex);
  //             indices.push(complimentIndex);
  //             break;
  //         } else numsIndex++;
  //     }

  //     return indices;

  //      OPTIMAL: ~50ms OBJECT MAP

  const memo = {};
  for (let i = 0; i < nums.length; i++) {
    if (memo[target - nums[i]] !== undefined) {
      return [memo[target - nums[i]], i];
    }
    memo[nums[i]] = i;
  }

  //     OPTIMAL: ~50ms USING MAP()
  //     const map = new Map();

  //     for (let i = 0; i < nums.length; i += 1) {
  //         if (map.has(nums[i])) {
  //             return [map.get(nums[i]), i]
  //         }

  //         map.set(target - nums[i], i);
  //     }
};
