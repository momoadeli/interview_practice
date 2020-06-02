/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {

  let results = []

  function comb(n, k, curr = [], index = 1){
      if(curr.length===k){
          results.push(curr);
          return [];
      }
      else{
          for (let i = index; i <= n; i++){
              comb(n, k, [...curr, index], ++index);
          }
          return results;
      }
  }

  results = comb(n, k);

  return results;
};


console.log('combination k of n numbers: ', combine(4,2))
