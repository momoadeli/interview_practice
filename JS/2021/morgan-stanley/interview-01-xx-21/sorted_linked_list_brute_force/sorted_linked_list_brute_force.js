class LLNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let n = new LLNode(10);

n.next = null;

console.group('new node');

let createRandomLinkedList = (n = 0) => {

    let value = Math.floor(Math.random() * n);
    let head = new LLNode(value);
    let curr = head;

    for (let i = 1; i < n; i++) {
        value = Math.floor(Math.random() * n)
        let newNode = new LLNode(value);
        curr.next = newNode;
        curr = newNode;
    }

    return head;
}

let populateLLArray = (ll) => {

    let curr = ll;
    let arr = [];
    while (curr.next) {
        arr.push({ value: curr.value, node: curr })
        curr = curr.next;
    }

    return arr;
}

let randomLL = createRandomLinkedList(10);

console.log('random linked list:');


let llArr = populateLLArray(randomLL);

console.log('populated llArr');


llArr.sort((a, b) => a.value - b.value);

console.log('sorted llArr');

let getSortedLinkedList = (llArr) => {

    let head = null;
    head = llArr[0].node;
    let curr = head;

    for (let i = 1; i < llArr.length; i++) {
        curr.next = llArr[i].node;
        curr = curr.next;
    }

    return head;
}

let sortedLL = getSortedLinkedList(llArr);

console.log('sorted linked list');