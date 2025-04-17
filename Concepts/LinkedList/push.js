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
  }
  
  const myLinkedList = new LinkedList(10);
  myLinkedList.push(20);
  console.log(myLinkedList);