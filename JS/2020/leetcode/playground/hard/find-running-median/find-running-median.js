/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.arr = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  /**
   *
   * it is key to understand the as elements are added
   * they are inserted in the correct position to ensure
   * the array is always sorted. This reduces the need to
   * sort every time to calculate the median.
   */
  const bs = n => {
    let start = 0;
    let end = this.arr.length;
    while (start < end) {
      let mid = Math.floor((start + end) / 2);
      if (n > this.arr[mid]) start = mid + 1;
      else end = mid;
    }
    this.arr.splice(start, 0, n);
  }
  if (this.arr.length === 0) this.arr.push(num);
  else bs(num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const mid = Math.floor(this.arr.length / 2);
  return (this.arr.length % 2 === 0) ? (this.arr[mid - 1] + this.arr[mid]) / 2 : this.arr[mid];
};

MedianFinder.prototype.naiveMedians = function (a) {
  let sortedInput = [...a];

  let results = new Array(a.length).fill(null);

  sortedInput.sort((a, b) => a - b);

  for (let i = a.length - 1; i >= 0; i--) {

    let medianIndex = Math.floor((sortedInput.length - 1) / 2);
    let median = -1;
    if (sortedInput.length % 2 === 0) {
      median = (sortedInput[medianIndex] +
        sortedInput[medianIndex + 1]) / 2;
    } else {
      median = sortedInput[medianIndex];
    }

    results[i] = median;

    // remove last element in original input from sorted input:
    let removeIndex = sortedInput.indexOf(a[i])
    if (removeIndex !== -1)
      sortedInput.splice(removeIndex, 1);
  }

  return results;
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

/* !!!! MO NOTE !!!!
   since the inputs are not bound (say 0 to 100)
   can't use a 'count sort' array.
   the editorial and leetcode both have explanations.
   In fact, although the tests pass, this algo fails
   in Leetcode. So I activated the leetcode version and
   commented out the naive version.
   In the Leetcode version the added num is pushed in the proper place
   of array and keeping it sorted instead of sorting everytime
   a find is requested. This 'inplace' sort is akin to
   a binary add/sort algo.
*/

const testStream = function (a) {
  let medians = [];
  let mf = new MedianFinder()
  a.forEach(num => {
    mf.addNum(num);
    medians.push(mf.findMedian());
  });
  return medians;
}

const testNaiveMedians = function (q) {
  let medians = [];
  let mf = new MedianFinder()
  medians = mf.naiveMedians(q);
  return medians;
}

console.log('medians: ', testStream([6, 10, 2, 6, 5, 0, 6, 3, 1, 0, 0]));

console.log('medians: ', testStream([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

console.log('medians: ', testStream([3, 5, 7, 4, 6]));

console.log('NAIVE/SLOW medians: ', testNaiveMedians([6, 10, 2, 6, 5, 0, 6, 3, 1, 0, 0]));



