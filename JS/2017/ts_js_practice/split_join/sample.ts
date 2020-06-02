// NOTE: map doesn't change original array
// 
var fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

var joinedFahr = fahrenheit.join('');

console.log('joinedFahr: ', joinedFahr);

var removedSpaces = joinedFahr.replace(/\s/g, '');

var splitFahr = removedSpaces.split('');

console.log(splitFahr);