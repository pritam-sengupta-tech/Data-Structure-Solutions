class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(value) {
        let newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }
    // Enqueue method to add a new node to the end of the queue
    enqueue(value) {
        let newNode =  new Node(value);
        if(this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }
    //Dequeue method to remove a node from the beginining of the queue
    dequeue() {
        if(this.length === 0 ) return undefined;
        let temp = this.first;
        if(this.length === 0){
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
            temp.next = null;
        }  
        this.length--;
        return temp; 
    }
}

const queue = new Queue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue);