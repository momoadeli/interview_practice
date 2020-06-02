
function accumulatedNumFrequencies(numFrequencies) {
  const _countFreq = [...numFrequencies];

  // cumulatively add each pair of consecutive values in our count array
  for (let i = 1; i < _countFreq.length; i++) {
    _countFreq[i] = _countFreq[i] + _countFreq[i - 1]
  }
  return _countFreq
}

function twiceMedian(accumulatedCountFrequency, trailingDays) {
  let a = 0
  let b = 0

  if (trailingDays % 2 === 0) {

    const idxFirst = accumulatedCountFrequency.findIndex(x => {
      return trailingDays / 2 <= x
    })

    if (idxFirst !== -1) {
      a = idxFirst
    }

    const idxSecond = accumulatedCountFrequency.findIndex(x => {
      return trailingDays / 2 + 1 <= x
    })

    if (idxSecond !== -1) {
      b = idxSecond
    }

  } else {

    const idxA = accumulatedCountFrequency.findIndex(x => {
      return Math.floor(trailingDays / 2 + 1) <= x
    })

    if (idxA !== -1) {
      a = 2 * idxA
    }

  }
  return a + b
}

// Complete the activityNotifications function below.
function activityNotifications(expenditures, trailingDays) {
  let numNotifications = 0;

  let numFreq = new Array(maxExpenditure + 1).fill(0);

  expenditures.slice(0, trailingDays).forEach(x => {
    numFreq[x]++;
  });

  for (let i = trailingDays; i < expenditures.length; i++) {

    const twiceMed = twiceMedian(accumulatedNumFrequencies(numFreq), trailingDays)

    if (expenditures[i] >= twiceMed) numNotifications++
    // add count for 'right shifted in' trailing days element
    numFreq[expenditures[i]] += 1
    // reduce count for 'left shift out' trailing days element
    numFreq[expenditures[i - trailingDays]]--

  }

  return numNotifications
}

const maxExpenditure = 200;
const trailingDays = 3;
const expenditures = "10 20 30 40 50".split(" ");

activityNotifications(expenditures, trailingDays);


