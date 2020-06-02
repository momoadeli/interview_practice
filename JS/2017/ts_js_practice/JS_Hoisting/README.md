"What’s actually happening is that your 'function declarations' and 'variable declarations' are added to memory during the compile phase."

a = 3
console.log(a); // works!
var a; is a declration so it's hoisted

---

console.log(a)q // 'undefined'!
var a = 3; isn't hoisted since it's an initialization and not  declaration

# 1:
https://codeburst.io/javascript-what-is-hoisting-dfa84512dd28
