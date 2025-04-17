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
    shift(){
        if(this.length === 0) return undefined;
        let temp = this.head; // Store the current head node
        if(!this.head.next) {
            this.head = null;
            this.tail = null;
        } // If there is only one node, set both head and tail to null 
        else {
            this.head = this.head.next;
            this.head.prev = null; // Set the previous pointer of the new head to null
            temp.next = null; // Clear the next pointer of the old head
        }
        this.length--;
        return temp; // Return the removed node (optional)
    }
}

const myDLL = new doublyLinkedList(10);
myDLL.push(20);
myDLL.push(30);
myDLL.shift();
console.log(myDLL);