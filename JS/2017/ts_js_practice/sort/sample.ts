
// NOTE: sort modifies the original array
var preSortArrayString = ['25', '100', '33', '78'];

var postSortArrayString = preSortArrayString.sort()

console.log(postSortArrayString);  //correct sort because '100' is low than '25'...

var preSortArrayInt = [25, 100, 45, 87];

var postSortArrayInt = preSortArrayInt.sort();

console.log(postSortArrayInt); //incorrect sort becasuse sort considers each array element 
                               // like string by default

// to sort as integers pass in a compare function
// 
function compareAscending(prev: number, next: number) {
    return prev - next;
}

postSortArrayInt = preSortArrayInt.sort(compareDescendingTest);

console.log(postSortArrayInt); //ascending

function compareDescending(prev: number, next: number) {
    return next - prev;
}

var compareDescendingTest = function(prev: number, next: number) {
    return next - prev;
}

postSortArrayInt = preSortArrayInt.sort(compareDescendingTest);

console.log(postSortArrayInt, preSortArrayInt); //ascending


