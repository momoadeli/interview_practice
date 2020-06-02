
// NOTE: filter does NOT modify the original array

var preFilterArrayString = ['25', '100', '33', '78'];

function checkNotTooOld(age: string) {   //

	return age !== '100';   
}

var postFilterArrayString = preFilterArrayString.filter(checkNotTooOld);

console.log(postFilterArrayString, preFilterArrayString);

var dupeArray =  ['a', 'a', 'b', 'c', 'd', 'd'];

// Here indexOf returns index of FIRST MATCH!!!

var uniqueProducts = dupeArray.filter((elem, i, array) => {
        return dupeArray.indexOf(elem) === i;
    }
);

console.log('unique array is: ', uniqueProducts);