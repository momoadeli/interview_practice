/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

const findTargetNode = function (tree, val) {

  if (tree.val === val) return tree;

  let found;

  // do a BFS!
  const bfs = function (node) {
    if (node.val === val) {
      found = node;
      return;
    }
    else {
      if (node.left)
        bfs(node.left)
      if (node.right)
        bfs(node.right)
    }
  }

  if (tree.left)
    bfs(tree.left)
  if (tree.right)
    bfs(tree.right)

  return found;

}

const levelOrderDeserialize = function (data) {

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

var getTargetCopy = function (original, cloned, target) {

  // do a BFS

  if (target.val === cloned.val) return cloned;

  let left, right, found;

  const bfs = function (node) {
    if (node.val === target.val) {
      found = node;
      return node;
    }
    else {
      if (node.left)
        left = bfs(node.left);

      if (left) return left;

      if (node.right)
        right = bfs(node.right);
    }
  }

  if (cloned.left)
    left = bfs(cloned.left);

  if (left) return left;

  if (cloned.right)
    right = bfs(cloned.right);

  return found;
};

let bt = levelOrderDeserialize([7, 4, 3, null, null, 6, 19]);
console.log('bt: ', bt);

const target = findTargetNode(bt, 3)

console.log(getTargetCopy(levelOrderDeserialize([7, 4, 3, null, null, 6, 19]), levelOrderDeserialize([7, 4, 3, null, null, 6, 19]), target));
