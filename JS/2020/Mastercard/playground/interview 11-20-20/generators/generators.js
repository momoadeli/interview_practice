// function* is a keyword so can use arrow functions in generators
// generators are functions that can be exited and later reentered.

function* infinite() {

    let seed = 0;

    while(true) yield seed++;
    
}

const generator = infinite();

let i = 0;
while(i < 10) {
    console.log(generator.next().value);
    i++
}
