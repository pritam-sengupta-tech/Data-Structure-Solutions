class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        let newNode = new Node(value);
        this.top = newNode;
        this.length = 1;
    }
    push(value) {
        let newNode = new Node(value);
        if(this.length === 0) this.top = newNode;
        else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }
    pop() {
        if(this.length === 0) return undefined;
        let temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        this.length--;
        return temp;
    }
}

let stack = new Stack(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop(); // removes 4
console.log(stack.top); // Stack { top: Node { value: 1, next: null }, length: 1 }