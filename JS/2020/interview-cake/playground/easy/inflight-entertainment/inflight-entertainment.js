function canTwoMoviesFillFlight(movieLengths, flightLength) {

  // Determine if two movie runtimes add up to the flight length
  if (!movieLengths || movieLengths.length === 0 ) return false;

  // ------------!!!!!!!!!!!!! O(n) solution [below is O(n log(n)) solution below] !!!!!!!!!!!!!-------------------

  let checkSet = new Set();
  let prevLeft = movieLengths[0];
  checkSet.add(prevLeft);

  for (i = 1; i < movieLengths.length; i++) {

    let diff = flightLength - movieLengths[i];
    if(!checkSet.has(diff)) {
      checkSet.add(movieLengths[i]);
    } else {
      return true;
    }
  }


  return false;

  // ------------!!!!!!!!!!!!! O(n log(n)) solution !!!!!!!!!!!!!-------------------

  // movieLengths.sort ( (a,b) => a - b); // sort is: (O(n log(n)))

  // let left = 0;
  // let right = movieLengths.length - 1;

  // while (left < right) {
  //   let currLeft = movieLengths[left];
  //   let currRight = movieLengths[right];
  //   let diff = currLeft - currRight;
  //   let sum = currLeft + currRight;

  //   if (sum === flightLength) return true;

  //   if (diff < 0) {
  //     while(currRight === movieLengths[right]) right--;
  //   } else {
  //     while(currLeft === movieLengths[left]) left++;
  //   }
  // }

  // return false;
}

// Tests

let desc = 'short flight';
let actual = canTwoMoviesFillFlight([2, 4], 1);
let expected = false;
assertEquals(actual, expected, desc);

desc = 'long flight';
actual = canTwoMoviesFillFlight([2, 4], 6);
expected = true;
assertEquals(actual, expected, desc);

desc = 'one movie half flight length';
actual = canTwoMoviesFillFlight([3, 8], 6);
expected = false;
assertEquals(actual, expected, desc);

desc = 'two movies half flight length';
actual = canTwoMoviesFillFlight([3, 8, 3], 6);
expected = true;
assertEquals(actual, expected, desc);

desc = 'lots of possible pairs';
actual = canTwoMoviesFillFlight([1, 2, 3, 4, 5, 6], 7);
expected = true;
assertEquals(actual, expected, desc);

desc = 'not using first movie';
actual = canTwoMoviesFillFlight([4, 3, 2], 5);
expected = true;
assertEquals(actual, expected, desc);

desc = 'only one movie';
actual = canTwoMoviesFillFlight([6], 6);
expected = false;
assertEquals(actual, expected, desc);

desc = 'no movies';
actual = canTwoMoviesFillFlight([], 2);
expected = false;
assertEquals(actual, expected, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
