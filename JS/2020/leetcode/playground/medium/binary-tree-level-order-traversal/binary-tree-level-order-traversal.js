class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

var levelOrderSerialize= function(root) {
  const res = [];
  const queue = root ? [root] : [];
  while (queue.length) {
      let node = queue.shift();
      if (node) {
          res.push(node.val);
          queue.push(node.left || null);
          queue.push(node.right || null);
      } else {
          res.push(null);
      }
  }
  while (res[res.length - 1] === null) res.pop();
  return JSON.stringify(res);
};

var levelOrderDeserialize = function (data) {

  if (!data.length) return null;
  const root = new TreeNode(data.shift());
  const queue = [root];
  while (queue.length) {
    let node = queue.shift(), val;
    node.left = (val = data.shift()) || val === 0 ? new TreeNode(val) : null;
    node.right = (val = data.shift()) || val === 0 ? new TreeNode(val) : null;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return root;
};

let bt = levelOrderDeserialize([3, 9, 20, null, null, 15, 7]);
console.log('bt: ', bt);
let serialized = levelOrderSerialize(levelOrderDeserialize([3, 9, 20, null, null, 15, 7]));
console.log('serialized: ', serialized);


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {

  const addLevel = function(node, level) {

    if (node === null) {
      return;
    } else {
      traversalArray[level] === undefined ?
        traversalArray[level] = [node.val] :
        traversalArray[level].push(node.val)
      level++;
      addLevel(node.left, level);
      addLevel(node.right, level);
    }

  }

  let traversalArray = [[root.val]];

  addLevel(root.left, 1);
  addLevel(root.right, 1);


  return traversalArray;

}

console.log('leverOrder: ', levelOrder(levelOrderDeserialize([3,9,20,null,null,15,7])));
