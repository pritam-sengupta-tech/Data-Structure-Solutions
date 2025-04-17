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
    set(index, value){
        if(index < 0 || index >= this.length) return undefined;
        let temp = this.get(index);
        if(temp) {
            temp.value = value;
            return temp;
        }
        return undefined; // Return undefined if the index is invalid
    }
}

const myDLL = new doublyLinkedList(10);
myDLL.push(20);
myDLL.push(60);
myDLL.push(30);
myDLL.push(80);
setNode = myDLL.set(66,100); // Get the node at index 3
console.log(setNode); // Should print the node with value 80
// console.log(myDLL);