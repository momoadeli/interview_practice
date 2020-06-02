function mergeRanges(meetings) {

  if (!meetings || meetings.len === 0) return [];

  if (meetings.length === 1) return meetings;

  meetings.sort((a, b) => a.startTime - b.startTime);

  let results = [];

  let prev = meetings[0];

  let i = 1;

  while (i < meetings.length) {

    if (meetings[i].startTime <= prev.endTime) {
      prev = {
        startTime: Math.min(prev.startTime, meetings[i].startTime),
        endTime: Math.max(prev.endTime, meetings[i].endTime)
      }
    } else {
      results.push(prev);
      prev = meetings[i];
    }

    i++;
  }

  results.push(prev);

  return results;

}

const meetings = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
]

console.log('merged ranges: ', mergeRanges(meetings));
