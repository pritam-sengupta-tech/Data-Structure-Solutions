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
    get(index){
        if(index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        if(index < this.length/2) {
            for(let i=0 ; i<index; i++){
                temp=temp.next;
            }
        }
        else{
            temp=this.tail;
            for(let i=this.length-1; i>index; i--){
                temp=temp.prev
            }
        }
        return temp;
    }
    remove(index){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return this.pop(); // If index is equal to length, push the value
        if(index === 0) return this.shift(); // If index is 0, unshift the value
        let temp = this.get(index); // Get the node before the index
        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
        temp.next=null;
        temp.prev=null;
        this.length--;
        return true;
    }
}

const myDLL = new doublyLinkedList(10);
myDLL.push(20);
myDLL.push(30);
myDLL.push(50);
myDLL.push(60);
myDLL.remove(3); // Remove the node at index 3 (which is 50)
console.log(myDLL.get(3)); // Should return the node at index 3 (which is now 60)