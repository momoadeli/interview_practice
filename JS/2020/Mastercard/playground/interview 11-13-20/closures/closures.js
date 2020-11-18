const DogFunction = function (a) {

  function bark() {
    setTimeout(() => {
      console.log('barked after ', a, ' millisecends');
    }, a);
  }

  return bark;

  // return bark = function() {

  //     setTimeout( () => {
  //       console.log('bark!')
  //     }, a);
  // }
}

let bark = DogFunction(3000);
bark();


class DogClass {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log(`my name is ${this.name}`);
  }

  sitNBarkFunc() {
    setTimeout(function() {
      console.log(`in func: my name is ${this.name}`);
    })
  }

  sitNBarkArrow() {
    setTimeout( () => {
      console.log(`in arrow: my name is ${this.name}`);
    }, 2000)
  }
}

const dog = new DogClass('bob');

dog.bark();
dog.sitNBarkFunc();
dog.sitNBarkArrow()

for (var i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log('var i is ', i);
  })
}

for (let i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log('let i is ', i)
  })
}

for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log('var arrow i is ', i);
  });
}

/*  START CLASS VS FACTORIES
**/

class CAnimal {
  constructor() {
    this.sound = 'class animal sound';
  }

  makeSound() {
    if (!this) {
      console.log('incorrect this.');
      return;
    }
    console.log('class sound is ', this.sound);
  }

  makeSoundArrow = () => {
    console.log('class make sound arrow');
  }
}

function testThis_MakeSound(meth) {
  meth();
}


let cAnimal = new CAnimal();
cAnimal.makeSound();
testThis_MakeSound(cAnimal.makeSound);  // incorrect 'this'
testThis_MakeSound(cAnimal.makeSoundArrow);
testThis_MakeSound(cAnimal.makeSound.bind(cAnimal)); // for this to be cAnimal

// factory animal return an object which now works since there's no 'this'.

const fAnimal = () => {
  const sound = 'factory animal sound'

  return  {
    makeSound: () => console.log('factory sound is ', sound)
  }
}

const fAn = fAnimal();
testThis_MakeSound(fAn.makeSound); // works without binding

