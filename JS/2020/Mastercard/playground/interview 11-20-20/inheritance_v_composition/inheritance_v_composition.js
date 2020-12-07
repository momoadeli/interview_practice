// Create a mixin
// const FoodMixin = superclass => class extends superclass {
//     eat(food) {
//         console.log(`Eating ${food}`);
//     }

//     poop() {
//         console.log("Going to 💩");
//     }
// };

// console.log('foodmixin is ', FoodMixin);]

const Engine = {

    start() {

    },

    stop() {

    }

}

console.log('engine is ', Engine);

const EngineOld = {
    start: function() {

    },
    stop: function() {

    }
}

console.log('engineold is ', EngineOld);

const Appliance = {color: 'red'};

const mixin = Object.assign({}, Appliance, Engine);

mixin.start();