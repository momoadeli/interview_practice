function rotLeft(a, d) {

  let toShift = a.filter((el, i) => i < d);

  let shifted = a.filter((el, j) => j >= toShift.length);

  return shifted.concat(toShift)
}
// some irrelevant playing around:
//
// let array = ["a", "b", "c", "a"];
// let arrMap = {};

// array.map(el => {
//   let key = el + 0
//   arrMap[el] === undefined ? arrMap[el] = {[key + 0]: el + 0} : arrMap[el] = {[key+ 1]: el + 1}
// })


console.log('shifted array is: ', rotLeft('1 2 3 4 5'.split(' '), 4).join(' '));
