// NEEDS DATA: RUN IN LEETCODE!!
// Definition for singly-linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {

  let llAMap = new Map();

  let llA = headA;

  let intersectionNode = null;

  while (llA !== null) {
      llAMap.set(llA, true);
      llA = llA.next;
  }

  // traverse B and see if any node is in llAMap (intersection)

  let llB = headB;

  while (llB !== null) {
      if (llAMap.has(llB)) {
          intersectionNode = llB;
          break;
      }
      llB = llB.next;
  }

  return intersectionNode;

};
