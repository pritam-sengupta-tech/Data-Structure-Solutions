class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null; // Adding prev pointer for doubly linked list
    }
}

class doublyLinkedList {
    constructor(value) {
        let newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    push(value) {
        let newNode = new Node(value);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

const myDLL = new doublyLinkedList(10);
myDLL.push(20);
console.log(myDLL);