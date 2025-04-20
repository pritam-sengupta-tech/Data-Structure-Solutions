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
    enqueue(value) {
        let newNode =  new Node(value);
        if(this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }
}

const queue = new Queue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue); // Queue { first: Node { value: 1, next: null }, last: Node { value: 1, next: null }, length: 1 }