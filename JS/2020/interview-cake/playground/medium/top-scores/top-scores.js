function sortScores(unorderedScores, highestPossibleScore) {

  // since thre is a 'small' upper bound to score we can use a 'countsort'

  if (!unorderedScores || unorderedScores.length === 0) return [];

  let orderedArray = new Array(highestPossibleScore + 1).fill(0);

  unorderedScores.forEach( score => {
    orderedArray[score]++
  });

  let unorderedIndex = 0;

  for (let score = orderedArray.length - 1; score >=0; score--) {
    let count = orderedArray[score];
    if (count !== 0) {
      for (let j = 0; j < count; j++) {
        unorderedScores[unorderedIndex] = score;
        unorderedIndex++;
      }
    }
  }
  return unorderedScores;
}

// Tests

let desc = 'no scores';
let actual = sortScores([], 100);
let expected = [];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

desc = 'one score';
actual = sortScores([55], 100);
expected = [55];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

desc = 'two scores';
actual = sortScores([30, 60], 100);
expected = [60, 30];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

desc = 'many scores';
actual = sortScores([37, 89, 41, 65, 91, 53], 100);
expected = [91, 89, 65, 53, 41, 37];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

desc = 'repeated scores';
actual = sortScores([20, 10, 30, 30, 10, 20], 100);
expected = [30, 30, 20, 20, 10, 10];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
