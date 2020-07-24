/**
 * CANNOT RUN LOCALLY!!!
 *
 * // This is the ImmutableListNode's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function ImmutableListNode() {
 *    @ return {void}
 *    this.printValue = function() { // print the value of this node.
 *       ...
 *    };
 *
 *    @return {ImmutableListNode}
 *    this.getNext = function() { // return the next node.
 *       ...
 *    };
 * };
 */

/**
 * @param {ImmutableListNode} head
 * @return {void}
 */
var printLinkedListInReverse = function(head) {

  const reverseTraverse = function(node) {
      if (node === null) return;
      else {
          reverseTraverse(node.getNext());
          node.printValue()
      }
  }

  reverseTraverse(head);

};
