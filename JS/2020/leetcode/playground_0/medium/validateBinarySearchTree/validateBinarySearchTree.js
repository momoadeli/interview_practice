// NEEDS DATA: RUN IN LEETCODE!!
// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {

  if (root === null) return true;

  function validBSTHelper(node, lower, upper) {

    if (node === null) return true

    if (lower !== null && node.val <= lower) return false;
    if (upper !== null && node.val >= upper) return false;

    if (!validBSTHelper(node.right, node.val, upper)) return false;

    if (!validBSTHelper(node.left, lower, node.val)) return false;

    return true;

  }

  return validBSTHelper(root, null, null);

};

console.log('get test tree from leetcode');
