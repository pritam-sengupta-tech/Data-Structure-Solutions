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
    insert(index, value){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return this.push(value); // If index is equal to length, push the value
        if(index === 0) return this.unshift(value); // If index is 0, unshift the value
        const newNode = new Node(value);
        let pre = this.get(index - 1); // Get the node before the index
        let post = pre.next; // Get the node at the index
        pre.next = newNode; // Set the next pointer of the previous node to the new node
        newNode.next = post; // Set the next pointer of the new node to the node at the index
        newNode.prev = pre; // Set the previous pointer of the new node to the previous node
        post.prev = newNode; // Set the previous pointer of the node at the index to the new node
        return true;
    }
}

const myDLL = new doublyLinkedList(10);
myDLL.push(20);
myDLL.push(30);
myDLL.push(50);
myDLL.push(60);
myDLL.insert(3, 40); // Insert 40 at index 3
console.log(myDLL.get(3));