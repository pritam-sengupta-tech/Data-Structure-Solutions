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
    pop() {
        if(this.length === 0) return undefined;
        let temp = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null; // Remove reference to the popped node
        temp.prev = null; // Clean up the popped node
        this.length--;
        if(this.length === 0) {
            this.head = null; // If the list is now empty, set head to null
            this.tail = null; // Set tail to null as well
        }
        return temp; // Return the popped node (optional)
    }
}

const myDLL = new doublyLinkedList(10);
myDLL.push(20);
myDLL.push(40);
myDLL.pop();
console.log(myDLL);