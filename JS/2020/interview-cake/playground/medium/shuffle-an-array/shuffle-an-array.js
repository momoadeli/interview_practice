function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(array) {

  // Shuffle the input in place

  if (!array || array.length === 0)
    throw new Error('no array or empty array not allowed');


  for (let i = 0; i < array.length; i++) {
    const currRandomIndex = getRandom(i, array.length - 1);

    if (currRandomIndex !== i) {
      const temp = array[currRandomIndex]

      array[currRandomIndex] = array[i];
      array[i] = temp
    }

  }
}

console.log(getRandom(0, 4))
const sample = [1, 2, 3, 4, 5];
console.log('Initial array: ', sample);
shuffle(sample);
console.log('Shuffled array: ', sample);
