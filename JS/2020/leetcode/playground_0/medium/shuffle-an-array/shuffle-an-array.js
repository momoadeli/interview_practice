/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  // hold nums in Solution
  this.nums = nums;
};

Solution.prototype.reset = function () {
  return this.nums;
};

Solution.prototype.shuffle = function () {
  // create a copy of this.nums, shuffle it, and return it
  const shuffled = this.nums.slice();

  for (let i = 0; i < shuffled.length; i++) {
    const currRandomIndex = this.getRandom(i, shuffled.length - 1);

    if (i !== currRandomIndex) {
      const temp = shuffled[currRandomIndex];

      shuffled[currRandomIndex] = shuffled[i];
      shuffled[i] = temp
    }

  }

  return shuffled;
};

Solution.prototype.getRandom = function (floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(nums)
* var param_1 = obj.reset()
* var param_2 = obj.shuffle()
*/
