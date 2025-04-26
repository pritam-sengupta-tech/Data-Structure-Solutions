class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    // If you want to create a BST with a value, you can do it like this:
    // constructor(value) {
    //     let newNode = new Node(value);
    //     this.root = newNode;
    // }

    // If you want to create an empty BST, you can do it like this:
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        }
        let temp = this.root; // Start at the root node
        while(true) {
           if(newNode.value === temp.value) return undefined; // No duplicates allowed
           if(newNode.value < temp.value){
                if(temp.left === null) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
           } else {
                if(temp.right === null) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
           }
        }
    }

    breadthFirstSearch() {
        let queue = []; // Initialize an empty queue
        let result = []; // Initialize an empty result array
        let currentNode = this.root; // Start with the root node
        queue.push(currentNode); // Add the root node to the queue
        while(queue.length > 0) { // While the queue is not empty
            currentNode = queue.shift(); // Remove the first node from the queue
            result.push(currentNode.value); // Add the value of the current node to the result array
            if(currentNode.left) queue.push(currentNode.left); // If there is a left child, add it to the queue
            if(currentNode.right) queue.push(currentNode.right); // If there is a right child, add it to the queue
        }
        return result; // Return the result array containing the values in breadth-first order
    }
}

const myBst = new BST();
myBst.insert(47);
myBst.insert(21);
myBst.insert(76);
myBst.insert(18);
myBst.insert(52);
myBst.insert(82);
myBst.insert(27);

console.log(myBst); 
console.log(myBst.breadthFirstSearch());

