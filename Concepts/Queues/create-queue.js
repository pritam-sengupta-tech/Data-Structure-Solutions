class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(value) {
        let newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }
}

const queue = new Queue(1);
console.log(queue); // Queue { first: Node { value: 1, next: null }, last: Node { value: 1, next: null }, length: 1 }