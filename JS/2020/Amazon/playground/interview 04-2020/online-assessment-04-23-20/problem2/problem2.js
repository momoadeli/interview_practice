function reorderLines(logFileSize, loglines) {
  // WRITE YOUR CODE HERE
  // if (!loglines || loglines.length === 0) return [];
  // if (logFileSize !== loglines.length) return [];

  const lineContent = s => s.slice(s.indexOf(' ') + 1); // get the lineContent after identifier
  const isNum = c => /\d/.test(c); // regex test digits 0 to 9

  // if lineContent is identical then compare identifier
  const compare = (a, b) => {
    const n = lineContent(a).localeCompare(lineContent(b));
    if (n !== 0) return n;
    return a.localeCompare(b);
  };

  const digitLogs = [];
  const letterLogs = [];

  for (const log of loglines) {
    if (isNum(lineContent(log)))
      digitLogs.push(log);
    else
      letterLogs.push(log);
  }
  return [...letterLogs.sort(compare), ...digitLogs];
}
// FUNCTION SIGNATURE ENDS

console.log(reorderLines(5, ['a1 9 2 3 1', 'g1 Act car', 'ab1 off Key dog']))
