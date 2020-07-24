var reorderList = function (head) {
  if (!node) return null;

  let stack = [];
  let node = head;

  // fill stack with nodes

  while(!node) {
    stack.push(node);
    node = node.next;
  }

  // rest node since shifted above
  node = head;

  for (let i = 0; i < stack.length; i++) {

    if (i % 2) {
      node.next = stack.shift();
    } else {
      node.next = stack.pop();
    }

    node = node.next;
  }

  node.next = null;

}
