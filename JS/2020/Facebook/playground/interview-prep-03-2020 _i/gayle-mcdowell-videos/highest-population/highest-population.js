
let people = [
  {
    name: "bob",
    birth: 1914,
    death: 2014
  },
  {
    name: "jane",
    birth: 1964,
    death: 2064
  },
  {
    name: "mary",
    birth: 1910,
    death: 1920
  },

]

function maxAliveBruteForce() {
  // 'name' attribute is redundant

  let yearMap = {};

  let maxYear = -1;
  let maxNumAlive = -1;

  people.forEach(person => {
    for (let i = person.birth; i <= person.death; i++) {
      yearMap[i] === undefined ? yearMap[i] = 1 : yearMap[i]++;
    }
  })

  Object.keys(yearMap).forEach(yr => {

    if (yearMap[yr] >= maxNumAlive) {
      maxYear = yr;
      maxNumAlive = JSON.parse(yearMap[yr]);
    }

  })

  console.log('maxYear is: ' + maxYear + ' and maxNumAlive is: ' + maxNumAlive);
}

// THIS ASSUMES MIN MAX YEARS TO CHECK. SAY 1900 TO 2000
// 1) Construct an array X of 100 integers (all initialized to zero; 101 integers if the year 2000 is included).
// 2) For each of the N people, increment X[birth year - 1900] by one and decrement X[death year - 1900] by one.
// 3) Iterate through X, maintaining a sum of each element as you go. The year with the most people alive is 1900
//    plus the index where the sum is maximum.
// https://www.quora.com/How-can-someone-find-the-year-with-the-most-people-alive
function maxAliveOptimal() {

  let populationChange = [];

  for (let i = 0; i <= (2064 - 1910); i++) {
    populationChange[i] = 0;
  }



  people.forEach(person => {
    populationChange[person.birth - 1910]++
    populationChange[person.death - 1910]--
  })

  let maxPopulation = 0;
  let maxPopulationIndex = 0;
  let population = 0;

  populationChange.forEach((popChange, i) => {

      population += popChange;
      if (population > maxPopulation) {
        maxPopulation = population;
        maxPopulationIndex = i;
      }

  });

  console.log('maxYear is: ' + (maxPopulationIndex + 1910));

}


// maxAliveBruteForce();
maxAliveOptimal();

