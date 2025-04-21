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
}

const myBst = new BST();
console.log(myBst); // BST { root: null }