// THIS IS A JAVASCRIPT ES6 file!! Good example of inheritance and also 2 out of 3 
// enhancements to DI
// EXCELLENT commentary on 3 levels of DI here (in Angular.io):
// https://angular.io/guide/dependency-injection

// The first Car class show it is frigile and rigid. because 
// it needs to know about Engine and Tire classes. If any of those changed 
// it would require for Car to change as well;

class Engine {
    
    constructor() {
        console.log('created engine');
    }
    
    getType() {
        return 'this is an engine';
    }
};

class Tires {
    
    constructor() {
        console.log('created Tire');
    }
    
    getType() {
        return 'this are tires';
    }
};

class BigTires extends Tires {

}

class Car {
    
    constructor() {
        this.engine = new Engine();
        this.tires = new Tires();
    }
};

let car = new Car();
//---------------------------
// Here the DI is better.  Car doesn't have to change even if Engine and Tires changed.
// HOWVER, the creation of the Car is still fragile. What if the signature of engine or tires
// everywhere car is instantiated needs to be changed. Here best to use a DI library to avoid that
// so we can simply create a Car by:
// let car = injector.get(Car);

class EngineI {
    
    constructor() {
        console.log('created engine I');
        this.engineType = 'this is an engine I';
    }
    
    getType() {
        return this.engineType;
    }
};

class TiresI {
    
    constructor() {
        console.log('created Tire I');
    }
    
    getType() {
        return 'this are tires I';
    }
};

class CarI {
    
    constructor(engine, tires) {
        this.engine = engine;
        this.tires = tires;
    }
    
    getEnginType() {
        return this.engine.getType()
    }
};

let carI = new CarI(new EngineI, new TiresI);

console.log(carI.getEnginType());

