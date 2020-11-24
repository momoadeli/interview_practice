class Animal {
    #name;
    #color;
    constructor(color, name) {
        this.color = color; // sintance attributes
        this.name = name;
        this.#color = color;
        this.#name = name;
    }

    speak() {   //attached to prototype...child isntancees point to same reference
        return this;
    }

    speakArrow = () => {    // attached to instance. children have different references
        return this;
    }
}

Animal.staticGenus = 'some static genus'; //attached to class definition

Animal.prototype.instanceGenus = 'some instance genus'; //chidlren have same reference

let an = new Animal('red', 'giraffe')

let spk = an.speak;

an.speakArrow();

console.log('naked spk is :', spk());

console.log('applied spk is ', spk.apply(an));

class NoSuperNoCtorDog extends Animal {

    
}

const ns_nc_d = new NoSuperNoCtorDog('yellow', 'no super no ctor dog');

console.log('no super no ctor dog is ', ns_nc_d);

// DOESN'T WORK SINCE WITH A CTOR A SUPER MUST BE CALLED TOO.
// class NoSuperWithCtorDog extends Animal{
//     constructor(color, name) {

//     }
// }

// const ns_wc_dog = new NoSuperWithCtorDog('perwinkle', 'no super with ctor');

console.log('no super with ctor dog is ', ns_wc_dog);

class SuperWithCtorDog extends Animal{
    constructor(color, name) {
        super(color, name);
    }
}

const s_wc_d = new SuperWithCtorDog('pink', 'super with ctor dog');

console.log('super with ctor dog is ', s_wc_d);