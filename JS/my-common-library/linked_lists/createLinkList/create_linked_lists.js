class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const createLinkList = function(llLength) {

    let head = new Node(Math.floor(Math.random() * 1000));
    let prev = head;


    for (let i= 1; i <= llLength; i++) {
        let curr = new Node(Math.floor(Math.random() * 1000));
        prev.next = curr;
        prev = curr;
    }

    return head;

}
