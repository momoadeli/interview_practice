/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

/**
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function (x) {

    this.stack.push(x);

    if (this.minStack.length === 0)
      this.minStack.push({val: x, count: 1});
    else {
      let currMin = this.minStack[this.minStack.length - 1];
      if (x < currMin.val) {
        this.minStack.push({val: x, count: 1});
      } else if (x === currMin.val)
        currMin.count++
    }

};

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
  let removed = this.stack.pop();
  let currMin = this.minStack[this.minStack.length - 1];

  if (removed === currMin.val)  {
    if (currMin.count === 1)
      this.minStack.pop()
    else
      currMin.count--;

  }

};

/**
* @return {number}
*/
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function () {
  let currMin = this.minStack[this.minStack.length - 1];
  return currMin.val;
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/

let commands = ["MinStack","push","push","push","getMin","pop","top","getMin"];
let vals = [[],[-2],[0],[-3],[],[],[],[]]
let results = [];
let ms = null;

commands.forEach( (cmd, i) => {
  switch (cmd) {
    case 'MinStack':
      ms = new MinStack();
      break;
    case 'push':
      ms.push(vals[i][0])
      results.push(null);
      break;
    case 'pop':
      ms.pop()
      results.push(null);
      break;
    case 'top':
      results.push(ms.top())
      break;
    case 'getMin':
      results.push(ms.getMin());
      break;
    default:
      break;
  }
})

console.log('results: ', results);
