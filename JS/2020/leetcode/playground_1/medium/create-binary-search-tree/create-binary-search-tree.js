class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  addNode = (data, left = null, right = null) => {

    let Node = {
      data,
      left,
      right
    }

    let currentNode;

    if (!this.root) {
      this.root = Node;
    } else {
      currentNode = this.root;
      while (currentNode) {
        if (data < currentNode.data) {

          if (!currentNode.left) {
            currentNode.left = Node;
            break;
          } else {
            currentNode = currentNode.left
          }
        } else if (data > currentNode.data) {

          if (!currentNode.right) {
            currentNode.right = Node;
            break;
          } else {
            currentNode = currentNode.right;
          }

        } else {
          console.log('invalid node!');
          break;
        }
      }
    }

  }
}

let BSTTest = new BinarySearchTree();

let testArray = [10, 7, 14, 5, 13, 8, 18, 15, 6]

testArray.forEach(el => BSTTest.addNode(el));

BSTTest;

BSTTest = new BinarySearchTree();

testArray = [5,1,4,null,null,3,6];

testArray.forEach(el => BSTTest.addNode(el));

BSTTest;
