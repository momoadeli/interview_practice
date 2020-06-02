class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

/*
  in order serialize:
  const inOrderSerialize = function(tree) {
    // pseudocode (I THINK):

    let inOrderSerializedArray = [];

    const inOrderTraverse = function(node, depth) {
      if (node === null) {
        return;
      } else {
        inOrderTraverse(node.left, depth + 1);
        if (inOrderSerializedArray[depth] === undefined)
          inOrderSerializedArray[depth] = [node.val]
        else
          inOrderSerializedArray[depth].push(node.val);
        inOrderTraverse(node.right, depth + 1);
      }
    }

    inOrderTraverse(tree.left, 1);
    inOrderSerializedArray.push([tree.val]);
    inOrderTraverse(tree.right, 1)

  }

  // in order deserialize (TBD)
*/

// let bt = levelOrderDeserialize([3, 9, 20, null, null, 15, 7]);
// console.log('bt: ', bt);
// let serialized = levelOrderSerialize(levelOrderDeserialize([3, 9, 20, null, null, 15, 7]));
// console.log('serialized: ', serialized);



