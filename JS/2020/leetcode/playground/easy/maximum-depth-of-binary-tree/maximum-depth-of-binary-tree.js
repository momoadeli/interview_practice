/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {

  if (!root) return 0;

  const getDepth = function (node, agg) {

    if (node === null) return agg;
    else {
      agg++;
      let leftDepth = getDepth(node.left, agg);
      let rightDepth = getDepth(node.right, agg);
      return Math.max(leftDepth, rightDepth);
    }

  }

  let leftDepth = getDepth(root.left, 1);
  let rightDepth = getDepth(root.right, 1);

  return Math.max(leftDepth, rightDepth);

};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

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

console.log('depth is: ', maxDepth(bt, 0));
