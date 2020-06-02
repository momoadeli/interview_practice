/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSumBrute = function (nums) {

  // let tripletsMap = new Set();
  let triplets = [];

  // examples:
  // [-1, 0, 1, 2, -1, -4]

  for (let i = 0; i < nums.length - 1; i++) {
    let tripletsMap = new Set();
    for (j = i + 1; j < nums.length; j++) {
      console.log('nums[i][j] is: [' + nums[i] + ']' + '[' + nums[j] + ']');
      if (tripletsMap.has(-(nums[i] + nums[j]))) {

        triplets.push([nums[i], nums[j], -(nums[i] + nums[j])]);

      } else {
        tripletsMap.add(nums[j]);
      }
    }
    console.log('tripletsMap is: ', tripletsMap);
  }
  // console.log('tripletsMap is: ', tripletsMap);
  console.log('triplets array is: ', triplets);
  return triplets;
};

threeSumBrute([-5, 1, -3, -1, -4, -2, 4, -1, -1]);

