// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function generalizedGCD(num, input)
{

    const gcd_two_numbers = function(a, b) {
      var R;
      while ((a % b) > 0)  {
        R = a % b;
        a = b;
        b = R;
      }
      return b;
    }
    // WRITE YOUR CODE HERE
  if (toString.call(input) !== "[object Array]")
    return  false;
  var len, a, b;
	len = input.length;
	if ( !len ) {
		return null;
	}
	a = input[ 0 ];
	for ( var i = 1; i < len; i++ ) {
		b = input[ i ];
		a = gcd_two_numbers( a, b );
	}
	return a;
}
// FUNCTION SIGNATURE ENDS

console.log('results: ', generalizedGCD(5, [2,3,4,5,6]));
console.log('results: ', generalizedGCD(5, [2,4,6,8,10]));
