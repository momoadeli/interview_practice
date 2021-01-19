const apple = { name: 'Apple', color: 'red' };

function showFruit(size, price) {
    console.log(this.name, ' is ', this.color, ' size ', size, ' price ', price);
}

showFruit.call(apple, '1kg', '$1');
showFruit.apply(apple, ['2kg', '$2']);
const fruit = showFruit.bind(apple, '3kg', '$3');
fruit();