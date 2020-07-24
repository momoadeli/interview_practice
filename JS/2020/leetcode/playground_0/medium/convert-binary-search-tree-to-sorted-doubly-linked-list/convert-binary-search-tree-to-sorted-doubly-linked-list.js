/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {

  let first = null;
  let last = null;

  let recurse = function(node) {

    if (node !== null) {

      recurse(node.left); // go all the way down left

      if (last !== null) { // if last node is already saved
        // If the last node is not null, circular/double ink the last and the current nodes.
        last.right = node;
        node.left = last;

      } else {
        first = node;
      }

      last = node;

      recurse(node.right);  // go all the way down right
    }
  }

  if (root === null) return null;

  recurse(root);

  last.right = first; // set last's successor which is first
  first.left = last;  // set first's predecessor which is last

  return first;
}

console.log('data only available in leetcode: ')
