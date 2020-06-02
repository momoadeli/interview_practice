// NEEDS DATA: RUN IN LEETCODE!!
// Definition for singly-linked list.
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var addTwoNumbers = function(l1, l2) {

  let head = new ListNode();
  let current = head;
  let carry = 0
  let p1 = l1;
  let q2 = l2;

  while (p1 !== null || q2 != null) {

      let x = p1 == null ? 0 : p1.val;
      let y = q2 == null ? 0 : q2.val;

      let sum = x + y + carry;

      carry = Math.floor(sum/10);

      current.next = new ListNode(sum % 10);
      current = current.next;

      if (p1 != null) p1 = p1.next;
      if (q2 != null) q2 = q2.next

  }

  if (carry > 0) {
      current.next = new ListNode(carry)
  }

  return head.next;

};

console.log('get test tree from leetcode');
