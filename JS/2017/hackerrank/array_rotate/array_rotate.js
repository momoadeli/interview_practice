// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem
//

var strAction = "3 1"
var arrAction = strAction.split(' ');

var length = parseInt(arrAction[0]);
var rotate = parseInt(arrAction[1]);


var strRotate = "1 2 3";
var arrRotate = strRotate.split(' ');

arrRotate = arrRotate.map(Number); // converts char lements to numbers
var arrRotateSpliced = arrRotate.splice(0,rotate);
arrRotate = arrRotate.concat(arrRotateSpliced);
// var arrElem = arrRotate.shift();
// arrRotate.push(arrElem);

// for (var i = 0; i < length - 1; i++) {
// 	var arrElem = arrRotate.shift();
// 	arrRotate.push(arrElem);	
// }

strRotate = arrRotate.toString();
strRotate = strRotate.replace(/,/g, ' ')

console.log(strRotate);

//final submission in hackerrank

// function main() {
//     var n_temp = readLine().split(' ');
//     var n = parseInt(n_temp[0]);
//     var k = parseInt(n_temp[1]);
//     strA = readLine();
//     a = strA.split(' ');
//     a = a.map(Number);
//     var arrRotateSpliced = a.splice(0,k);
//     a = a.concat(arrRotateSpliced);
//     strRotate = a.toString();
//     strRotate = strRotate.replace(/,/g, ' ')

//     console.log(strRotate);
// }


// original my INCORRECT solution in hackerrank:
//     var n_temp = readLine().split(' ');
   //  console.log('mo after line 1 split: ' + n_temp);
   //  var n = parseInt(n_temp[0]);
   //  var k = parseInt(n_temp[1]);
   //  init = readLine();
   //  console.log('pre split: ', init);
   //  a = init.split(' ');
   //  console.log('mo after line 2 split: ' + a);
   // // a = a.concat(a.splice(0,k));
   //  console.log('number: ' + Number);
   //  a = a.map(Number);
   //  a = a[0].toString();
   //  console.log('before replace: ', a);
   //  a = a.replace(/,/g ," ");
   //  console.log(a);
   //  function Number(curr, prev, arr) {
	//     console.log('in function:' + curr + prev + arr);
	//     var newArr = [];
	//     newArr = newArr.push(curr);
	//     console.log('curr is: ', curr);
	//     console.log('prev is: ', prev);
	//     //return arr[arr.length - curr]; //[ '5', '4', '3', '2', '1' ]
	//     //var newArr = [];
	//     //newArr = arr.shift();
	//     arr.push(arr[0]);
	//     console.log('before shift: ', arr);
	//     if (curr != prev) {
	//         console.log('shifted');
	//         arr.shift();
	//     } else {
	//         arr.pop();
	//     }
	//     console.log('before return: ', arr);
	//     return arr;
	// }
