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
        shift() {
            if(!this.head) return null;
            let temp = this.head;
            this.head = temp.next;
            temp.next= null;
            this.length--;
            if(this.length == 0){
                this.tail=null;
                this.head=null;
            }
            return temp;
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
        remove(index) {
            if(index < 0 || index > this.length) return undefined;
            if(index === this.length-1) return this.pop();
            if(index === 0) return this.shift();
            let pre = this.get(index - 1);
            let temp = pre.next; // Get the node to be removed
            pre.next = temp.next;
            temp.next=null;       
            this.length--;
            return temp; // Return the removed node (optional)
        }
  }
  
  const myLinkedList = new LinkedList(10);
  myLinkedList.push(20);
  myLinkedList.push(30);
  myLinkedList.push(40);
  myLinkedList.push(60);
  console.log(myLinkedList.remove(3));