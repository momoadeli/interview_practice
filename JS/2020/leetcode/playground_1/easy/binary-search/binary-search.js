const search = (nums, target) => {

  if (!nums && numslength === 0) return -1;

  let lo = 0
  let hi = nums.length -1;
  let mid = Math.floor((lo + hi)/ 2);

  while (lo <= mid) {

    if (target === nums[mid]) {
      return mid;
    } else if (target > nums[mid]) {
      lo = mid + 1;
    } else if (target < nums[mid]) {
      hi = mid - 1;
    }

    mid = Math.floor((lo + hi)/ 2);

  }

  return target === nums[mid] ? mid : -1;

}

console.log(search([-1,0,3,5,9,12], 2));
