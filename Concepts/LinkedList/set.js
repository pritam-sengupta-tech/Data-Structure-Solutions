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
      set(index, value){
        if(index < 0 || index >= this.length) return undefined;
        let temp = this.get(index);
        if(temp) {
            temp.data = value;
            return temp;
        }
        return undefined; // Return undefined if the index is invalid
      }
  }
  
  const myLinkedList = new LinkedList(10);
  myLinkedList.push(40);
  myLinkedList.push(20);
  myLinkedList.push(50);
  setNode = myLinkedList.set(2, 66); // Set the node at index 2
  console.log(setNode); // Should print the node with value 66
  console.log(myLinkedList.head);