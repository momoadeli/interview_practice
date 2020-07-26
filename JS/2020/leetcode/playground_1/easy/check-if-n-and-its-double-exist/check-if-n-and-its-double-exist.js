/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = (arr) => {

  if (!arr || arr.length < 2)
      throw new Error('invalid array');

  let arrMap = new Map();

  // map array
  arr.forEach(el => {
      if (arrMap.has(el)) {
          let count = arrMap.get(el);
          count++;
          arrMap.set(el, count)
      } else {
          arrMap.set(el, 1);
      }

  })

  let found = false;
  let i = 0;

  while (i < arr.length) {
      if (arr[i] === 0 && arrMap.has(arr[i]) && arrMap.get(arr[i]) < 2) {

      } else if (arrMap.has(2 * arr[i])) {

          found = true;
          return found;
      }
      i++;
  }

  return found;

};

console.log(checkIfExist([-2,0,10,-19,4,6,-8]));
