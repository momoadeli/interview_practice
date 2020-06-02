// sources: https://www.toptal.com/javascript/interview-questions and
// https://www.codementor.io/nihantanu/21-essential-javascript-tech-interview-practice-questions-answers-du107p62z
// 
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();

//-------------check if --------------------------
console.log(0.1 +0.2);

console.log((0.1+0.2) === 0.3);  //false

//------------check if palindrome

var evenIsPalin = "takkat";
var oddIsPalin = "tk a kt";
var evenNotPalindrome = 'jdgjhf';
var testPalinDrome = evenNotPalindrome;

var i = 0;
var boolPalindrome = true;

while(boolPalindrome && i < testPalinDrome.length) {

	if (testPalinDrome[i] !== testPalinDrome[testPalinDrome.length - i - 1]) {
		boolPalindrome = false;
		break;
	}
	i++;
	console.log(i);
}

console.log(i);
// OR better:
function isPalindrome(str: string) {
  str = str.replace(/\W/g, '').toLowerCase();
  return (str == str.split('').reverse().join(''));
}

console.log('nifty 10 char palindrome tester: ', isPalindrome(testPalinDrome));
//---------------------------------------
//

// function foo1()
// {
//   return {
//       bar: "hello"
//   };
// }

// function foo2()
// {
//   return	//ERROR!  here a semi-colon is implicit..but linter catches it
//   {
//       bar: "hello"
//   };
// }