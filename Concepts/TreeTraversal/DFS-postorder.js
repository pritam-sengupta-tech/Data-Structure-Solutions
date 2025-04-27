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

    dfsPostorder() {
        let result = []; // Initialize an empty result array
        function traverse(currentNode) { // Define a recursive function to traverse the tree
            if(currentNode.left) traverse(currentNode.left); // If there is a left child, traverse it
            if(currentNode.right) traverse(currentNode.right); // If there is a right child, traverse it
            result.push(currentNode.value); // Add the value of the current node to the result array
        }
        traverse(this.root); // Start the traversal from the root node
        return result; // Return the result array containing the values in post-order
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
console.log(myBst.dfsPostorder());

