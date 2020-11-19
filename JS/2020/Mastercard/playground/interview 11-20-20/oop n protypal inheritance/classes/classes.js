class Dog {
    constructor(name) {
        this.name = name;
    }

    bark = function() {
        console.log(`inside bark. name is ${this.name}`);
    }

    barkArrow = () => {
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
bob.barkArrow();