"use strict";

class BinarySearchTree {
  constructor() {
    //initially root is null

    this.root = null;
  }

  insertNumberNode(data, left = null, right = null) {
    //creating a Node
    //data we pass will act as individual parent Node
    //left and right are subtrees
    let Node = {
      data,
      left,
      right
    };
    //suppose currentNumberNode as a parent node
    //current Num Node value decides position of next value
    //if it goes to left subtree or right subtree
    let currentNumberNode;

    if (!this.root) {
      //if its not a root make it one by passing a Node
      this.root = Node;
    } else {
      //and if its a root now, assign it to currentNumberNode
      currentNumberNode = this.root;
      while (currentNumberNode) {
        //if data is smaller than current data, send it in left subtree
        if (data < currentNumberNode.data) {
          //if current num node doesn't have Node properties
          //we will assign it node properties
          if (!currentNumberNode.left) {
            currentNumberNode.left = Node;
            break;
          } else {
            //if it has node properties and it is sent by root to left
            //we will make it a left node because it is smaller than root node
            currentNumberNode = currentNumberNode.left;
          }
          //if data is larger than current data, send it in right subtree
        } else if (data > currentNumberNode.data) {
          //if current num node doesn't have Node properties
          //we will assign it node properties
          if (!currentNumberNode.right) {
            currentNumberNode.right = Node;
            break;
          } else {
            //if it has node properties and it is sent by root to right
            //we will make it a right node because it is larger than root node
            currentNumberNode = currentNumberNode.right;
          }
        } else {
          console.log("Try Different Value");
          break;
        }
      }
    }
  }
}
let BSTTest = new BinarySearchTree();

let testArray = [10, 7, 14, 5, 13, 8, 18, 15, 6]

testArray.forEach(el => BSTTest.insertNumberNode(el));

BSTTest;

BSTTest = new BinarySearchTree();

testArray = [5,1,4,null,null,3,6];

testArray.forEach(el => BSTTest.insertNumberNode(el));

BSTTest;
