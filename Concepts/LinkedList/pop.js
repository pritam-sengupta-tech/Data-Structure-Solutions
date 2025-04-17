// Node class
class Node {
    constructor(value) {
      this.data = value;
      this.next = null;
    }
  }
  
// LinkedList class
class LinkedList {
    constructor(value) {
        let newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1
    }
    push(value){
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    pop() {
        let temp = this.head;
        let pre = this.head;
        if (this.length === 0) return undefined;
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail=pre;
        this.tail.next = null;
        this.length--;
        return this;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.push(20);
myLinkedList.push(40);
myLinkedList.push(60);
myLinkedList.pop();

console.log(myLinkedList);