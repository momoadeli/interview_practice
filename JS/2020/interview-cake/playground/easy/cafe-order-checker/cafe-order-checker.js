function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {

  if (servedOrders.length !== takeOutOrders.length + dineInOrders.length) return false;

  // Check if we're serving orders first-come, first-served

  const checkValidQueue = function (q, served) {
    let result = true;

    let prevIdxServed = -1;

    for (let i = 0; i < q.length; i++) {
      let currIdxServed = servedOrders.indexOf(q[i]);

      if (currIdxServed === -1 || currIdxServed < prevIdxServed) return false;

      prevIdxServed =currIdxServed;

    }

    return result;
  }

  if (checkValidQueue(takeOutOrders, servedOrders)) {
    return checkValidQueue(dineInOrders, servedOrders)
  } else {
    return false;
  }

}

// Tests

let desc = 'both registers have same number of orders';
let actual = isFirstComeFirstServed([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6]);
assertEquals(actual, true, desc);

desc = 'registers have different lengths';
actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 2, 6, 3, 5]);
assertEquals(actual, false, desc);

desc = 'one register is empty';
actual = isFirstComeFirstServed([], [2, 3, 6], [2, 3, 6]);
assertEquals(actual, true, desc);

desc = 'served orders is missing orders';
actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 6, 3, 5]);
assertEquals(actual, false, desc);

desc = 'served orders has extra orders';
actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 2, 3, 5, 6, 8]);
assertEquals(actual, false, desc);

desc = 'one register has extra orders';
actual = isFirstComeFirstServed([1, 9], [7, 8], [1, 7, 8]);
assertEquals(actual, false, desc);

desc = 'one register has unserved orders';
actual = isFirstComeFirstServed([55, 9], [7, 8], [1, 7, 8, 9]);
assertEquals(actual, false, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
