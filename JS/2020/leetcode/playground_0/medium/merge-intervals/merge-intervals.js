var merge = function(intervals) {

  if (intervals === undefined || intervals.length === 0) return 0;

  let results = [];

  intervals.sort( (a, b) => a[0] - b[0]);

  let last = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const curr = intervals[i];

    if (curr[0] > last[1]) {
      results.push(last);
      last = curr;
    } else {
      last = [Math.min(last[0], curr[0]), Math.max(last[1], curr[1])];
    }
  }

  results.push(last);

  return results;
}

console.log('merged is: ', merge([[1,3],[2,6],[8,10],[15,18]]));
