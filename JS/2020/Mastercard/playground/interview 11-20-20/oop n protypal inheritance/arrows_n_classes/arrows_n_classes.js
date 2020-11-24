class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {    // attached to prototype. same reference in all children
        console.log('inside simple bark', this);
    }

    barkFunction = function() { //attached to instance. different reference for each child
        console.log(`inside barkfunction. name is ${this.name}`);
    }

    barkArrow = () => { //attached to instance. different reference for each child.
        console.log(`inside barkArrow. name is ${this.name}`);
        setTimeout(function() {
            console.log(`inside barkArrow setTimeOut. name is ${this.name}`);
        }, 200);
        setTimeout(() => {
            console.log(`inside barkArrow setTimeOut with arrow. name is ${this.name}`);
        }, 200);
    }
}

const bob = new Dog('bob');

bob.bark();
bob.barkFunction();
bob.barkArrow();

let ba = bob.barkArrow;
ba();
// let bf =  bob.barkFunction;
// bf();

class Cavapoo extends Dog {
    constructor(name) {
        super(name);
        console.log('cavapoo this is :');
    }
}

const cv = new Cavapoo('cava');

console.log('cavapoo object is : ', cv);

cv.bark();  //cv.bark === bob.bark
cv.barkFunction();  //cv.barkFunbtion !== bob.barkFunction
cv.barkArrow(); //cv.barkArrow !== bob.barkArrow

class Animal {
    speak() {
        return this;
    }

    speakArrow = () => {
        return this;
    }
}

let an = new Animal()

let spk = an.speak;

an.speakArrow();

console.log('naked spk is :', spk());

console.log('applied spk is ', spk.apply(an));