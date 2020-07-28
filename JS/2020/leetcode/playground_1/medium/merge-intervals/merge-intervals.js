const merge = (intervals) => {

  if (!intervals && intervals.length === 0) return [];

  intervals.sort((a, b) => a[0] - b[0]);

  let merged = [];

  let prev = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    let curr = intervals[i];

    if (curr[0] > prev[1]) {
      merged.push(prev);
      prev = curr;
    } else {
      prev = [Math.min(prev[0], curr[0]), Math.max(prev[1], curr[1])];
    }
  }

  merged.push(prev);

  return merged;

}

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));
