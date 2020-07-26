const findNumbers = (nums => {

  if (!nums)
    throw new Error ('invalid array');

  let numEvens = 0;

  nums.forEach(num => {

    if (num.toString().length % 2 === 0)
    numEvens++;

  });

  return numEvens;

});

console.log(findNumbers([12,345,2,6,7896]));
