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
    unshift(value) {
        let newNode = new Node(value);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.head.prev = newNode; // Set the previous pointer of the current head to the new node
            newNode.next=this.head; // Set the next pointer of the new node to the current head
            this.head = newNode; // Update the head to the new node
        }
        this.length++;
        return this; // Return the updated list
    }
}

const myDLL = new doublyLinkedList(10);
myDLL.unshift(30);
console.log(myDLL);