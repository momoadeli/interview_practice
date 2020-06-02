
// abstract classes must be extended AND IMPLEMENTED...like an interface.  They have an (dis)advantage that
// they contain abstract methods that need to be implemented as well. Unlike interfaces.

// The implements keyword treats the A class as an interface, that means C has to implement 
// all the methods defined in A, no matter if they have an implementation or not in A. Also there are no calls to super methods in C.

// extends behaves more like what you'd expect from the keyword. You have to implement only 
// the abstract methods, and super calls are available/generated.

abstract class AbstractBase {

    public name: string;
    public abstract getName(): string;
    public touch = () => {

    }
    public increment(num: number): number {
        return num + 1;
    }

}

class Impl extends AbstractBase {

    getName(): string {
        return 'yo';
    }

    touch = () => {
        console.log('yo');
        
    }

}

var myImpl = new Impl();

var t = myImpl.increment(1);

console.log(myImpl.increment(1));

interface IAnimal {
    name: string;
    gender: string;
}

class Dog implements IAnimal {
    name = 'Dog';
    gender = '';

    constructor(gender: string) {
        this.gender = gender;
    };

    getGender() {
        return this.gender;
    }

    touch = (): string => {
        return 'yo';
    }
}

let myDog = new Dog('male');

console.log(myDog.getGender());

class DogWrapper extends AbstractBase{  // not ideal extension...just example
    animal: IAnimal;
    constructor(animal: IAnimal) {
        super();
        this.animal = animal;
    }
    getName() {
        return this.animal.name;
    }
}

var myDWrapper = new DogWrapper({name: 'dog', gender: 'male'});

console.log(myDWrapper.getName());

