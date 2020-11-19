const FPerson =function(name, age) {

    this.constructor.population++;
    this.age = age;
    this.name = name;
    console.log('population is ',  this.constructor.population);

    // private properties


    // PRIVILEGED METHODS

    this.getLegs = function() {
        console.log('inside getLegs(). num legs is ', this.legs);
        return this.legs;
    }
}

//  static properties
FPerson.population = 0;

// prototype properties
FPerson.prototype.legs = 2;
FPerson.prototype.getAge = function () {
    console.group('inside getAge() prototype property. age is ', this.age);
    return this.age;
}

const commonGetAge = function() {
    console.log('inside commonGetAge(). age is ', this.age);
}

FPerson.prototype.commonGetAge = commonGetAge;

// FPerson.prototype.getLegs = function() { 
//     return this.legs;
// }

const bob = new FPerson('bob', 20);
const mary = new FPerson('mary', 21);

bob.getLegs();

bob.getAge();
mary.getAge();

bob.commonGetAge();
mary.commonGetAge();