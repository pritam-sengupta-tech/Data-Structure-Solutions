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
  }
  
  const myLinkedList = new LinkedList(10);
  myLinkedList.push(40);
  myLinkedList.push(20);
  myLinkedList.push(50);
  getNode = myLinkedList.get(2); // Get the node at index 2
  console.log(getNode); // Should print the node with value 20
  console.log(myLinkedList);