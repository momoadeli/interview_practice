// data only in leetcode or create your own data (see playground 0)
const maxDepth = (root) => {
  if (!root) return 0;

  let maxDepth = 0;

  const digIn = (node, depth) => {

    if (!node)
      return;
    else {
      depth++;

      maxDepth = Math.max(depth, maxDepth);

      if (node.left) digIn(node.left, depth);
      if (node.right) digIn(node.right, depth);

    }

  }

  digIn(root, 0);

  return maxDepth;

}
