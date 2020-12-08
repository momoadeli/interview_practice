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


let head = createLinkList(10);

console.log('linked list is ', head);


const sortLinkedListBruteForce = function(unSortedHead) {

    let arrayLL = [];
    let curr = unSortedHead;
    let sortedHead = unSortedHead;

    while(curr.next !== null) {
        arrayLL.push({value: curr.value, node: curr})
        curr = curr.next;
    }

    console.log('unsorted array is ', arrayLL);

    arrayLL = arrayLL.sort( (a, b) => {
        return a.value - b.value;
    });

    // now relink nodes;

    let prev = arrayLL[0].node;

    for (let i = 1; i < arrayLL.length; i++) {

        let curr = arrayLL[i].node;
        prev.next = curr;
        prev = curr;
    }


    return arrayLL[0].node;
    
}

console.log('sorted linked list is ', sortLinkedListBruteForce(head));
