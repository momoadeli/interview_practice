const maxArea = function (heights) {

  if (!heights || heights.length < 2)
    throw new Error('invalid data');

  let maxWater = 0;
  let start = 0;
  let end = heights.length - 1;

  while(start < end) {

    let currHeight = Math.min(heights[start], heights[end]);
    let currWidth = end - start;
    let currWater = currHeight * currWidth;

    if (currWater > maxWater)
      maxWater = currWater;

    if (heights[start] > heights[end])
      end--;
    else
      start++;
  }

  return maxWater;
}

console.log('max container: ', maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
