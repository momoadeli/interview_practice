function staircase(n) {

  let stairHash = '#';
  let stairBlank = ' ';

  let stair = '';

  for (let i = 0; i < n; i++) {
    stair = stairBlank.repeat(n - i - 1);
    stair = stair.concat(stairHash.repeat(i + 1));
    console.log(stair);
  }

}

console.log(staircase(66));
