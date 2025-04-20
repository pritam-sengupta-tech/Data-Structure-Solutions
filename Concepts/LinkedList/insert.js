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
            this.length = 1;
        }
        push(value){
            // Create a new node with the given value
            const newNode = new Node(value);
            // Check if the list is empty
            if (this.length === 0) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                // If the list is not empty, set the next property of the current tail to the new node
                this.tail.next = newNode;
                // Update the tail to point to the new node
                this.tail = newNode;
            }
            // Increment the length of the list
            this.length++;
        }
        unshift(value) {
        let newNode = new Node(value);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next=this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
        }
        get(index) {
            if(index < 0 || index >= this.length) {
                return undefined; // Index out of bounds
            }
            let temp = this.head;
            for(let i = 0; i < index; i++) {
                temp = temp.next;
            }
            return temp; // Return the node at the specified index
        }
        insert(index, value) {
            if(index < 0 || index > this.length) return undefined;
            if(index === this.length) return this.push(value);
            if(index === 0) return this.unshift(value);
            const newNode = new Node(value);
            let pre = this.get(index - 1);
            let post = pre.next;
            pre.next =  newNode;
            newNode.next = post;
            this.length++;
        }
  }
  
  const myLinkedList = new LinkedList(10);
  myLinkedList.push(20);
  myLinkedList.push(30);
  myLinkedList.push(40);
  myLinkedList.push(60);
  myLinkedList.insert(4, 50);
  console.log(myLinkedList.get(4));