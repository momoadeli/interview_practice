/**
 *  P(n, k). I added the 'k'
 */
var permute = function (nums, k = nums.length) {

  let permutations = [];


  var genPermutations = function (visited = new Set(), currentPurmutations = []) {

    if (currentPurmutations.length === k) {
      permutations.push(currentPurmutations);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (!visited.has(i)) {
        genPermutations(new Set([...visited, i]), [...currentPurmutations, nums[i]]);
      }
    }
  }

  genPermutations();

  return permutations;

};

console.log('permutations of integers is: ', permute([0, 1, 2]));
console.log('permutations 2 of integers is: ', permute([0, 1, 2]));
console.log('permutations chars is is: ', permute(['a', 'b', 'c', 'b']));
console.log('permutations 3 chars is is: ', permute(['a', 'b', 'c', 'd'], 2));
