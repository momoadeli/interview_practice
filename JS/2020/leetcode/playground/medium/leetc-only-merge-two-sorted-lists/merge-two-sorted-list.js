// NEEDS DATA: RUN IN LEETCODE!!
// Definition for singly-linked list.
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {

  if (l1 === null && l2 === null) return null;

  let merged = new ListNode();

  let current = merged;

  let p1 = l1;
  let p2 = l2;

  while (p1 !== null || p2 !== null) {

      if (p1 === null) {
          current.val = p2.val
          current.next = p2.next;
          break;
      };

      if (p2 === null) {
          current.val = p1.val
          current.next = p1.next;
          break;
      };

      if (p1.val <= p2.val) {
          current.val = p1.val;
          p1 = p1.next;
      } else {
          current.val = p2.val;
          p2 = p2.next;
      }

      current.next = new ListNode();
      current = current.next;
  }

  // console.log('merged is: ', merged);
  return merged;

};

console.log('get test tree from leetcode');
