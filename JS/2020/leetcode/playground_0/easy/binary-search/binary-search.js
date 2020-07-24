var search = function(nums, target) {

  // if (!nums || nums.length === 0) return -1;

  // let result = -1;

  // let searchMemo = function(nums, target, start, end) {

  //   if (start === end - 1) return -1;
  //   let mid = Math.floor((start + end)/2);

  //   let leftEnd = mid - 1;

  //   let rightStart = mid;

  //   if ( target === nums[leftEnd]) {
  //     return leftEnd;
  //   } else {
  //     if (target < nums[leftEnd]) {
  //       return searchMemo(nums, target, 0, leftEnd)
  //     } else {
  //       return searchMemo(nums, target, rightStart, end);
  //     }
  //   }
  // }

  // result = searchMemo(nums, target, 0, nums.length - 1)

  return result;
}

console.log('search result is: ', search([-1,0,3,5,9,12], 9));
console.log('search result is: ', search([-1,0,3,5,9,12,15], 9));
console.log('search results is: ', search([-1,0,3,5,9,12], 2))
