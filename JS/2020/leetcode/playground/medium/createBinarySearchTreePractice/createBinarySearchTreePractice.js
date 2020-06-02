class BinarySearchTreePractice {
  constructor() {
    this.root = null;
  }

  insertNodeVal(nodeVal) {

    let i = 0;

    let Node = {
      nodeVal,
      left: null,
      right: null
    }

    let currentValNode;

    if (!this.root) {
      this.root = Node;
    } else {

      currentValNode = this.root;

      while(currentValNode && i < 5) {

        if (nodeVal < currentValNode.nodeVal) {
          //assign left tree:
          if (!currentValNode.left) {
            currentValNode.left = Node;
            break;
          } else {
            currentValNode = currentValNode.left;
          }
        } else if (nodeVal > currentValNode.nodeVal) {
          //assign right tree:
          if (!currentValNode.right) {
            currentValNode.right = Node;
            break;
          } else {
            currentValNode = currentValNode.right;
          }
        }
        i++;
      }

    }
  }
}

let BSTTest = new BinarySearchTreePractice();

let testArray = [10, 7, 14, 5, 13, 8, 18, 15, 6]

testArray.forEach(el => BSTTest.insertNodeVal(el));

BSTTest;


console.log('BST is: ', BSTTest);
