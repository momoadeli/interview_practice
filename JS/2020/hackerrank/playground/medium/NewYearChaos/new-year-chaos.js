function numberTimesOvertaken(q, qIndex) {

  let numOvertaken = 0;
  // Math.max not need it seems BUT
  // q[qIndex] - 2 means always start j one item
  // BEFORE where q[qIndex] used to be.
  for (let j = Math.max(0, q[qIndex] - 2); j < qIndex; j++) {
    if (q[j] > q[qIndex]) {
      numOvertaken++;
    }
  }

  return numOvertaken;
}

// Complete the minimumBribes function below.
function minimumBribes(q) {

  let flgTooChaotic = false;
  let qIndex = q.length - 1;
  let totalBribes = 0;

  while (qIndex >= 0) {
    if (q[qIndex] > qIndex + 3) {
      flgTooChaotic = true;
      break;
    }

    totalBribes = totalBribes + numberTimesOvertaken(q, qIndex);;

    qIndex--;
  }

  if (flgTooChaotic) {
    console.log('Too chaotic');
  } else {
    console.log(totalBribes);
  }

}

// minimumBribes('5 1 2 3 7 8 6 4'.split(' ').map(qTemp => parseInt(qTemp, 10)));
minimumBribes('1 2 5 3 7 8 6 4'.split(' ').map(qTemp => parseInt(qTemp, 10)));
