class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class RecursiveBST {
    constructor () {
        this.root = null;
    }
    #recursiveInsert(value, currentNode = this.root) { // Private method denoted by # means it can only be accessed within the class
        if(currentNode === null) return new Node(value);
        if (value < currentNode.value) currentNode.left = this.#recursiveInsert(value, currentNode.left);
        else if (value > currentNode.value) currentNode.right = this.#recursiveInsert(value, currentNode.right);

        return currentNode;
    }

    rInsert(value) {
        if(this.root === null) this.root = new Node(value);
        this.#recursiveInsert(value);
    }

    #findMin(currentNode) {
        while (currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode.value;
    }

    #recursiveDelete(value, currentNode) {
        if (currentNode === null) return null; // Base case: value not found

        if (value < currentNode.value) {
            currentNode.left = this.#recursiveDelete(value, currentNode.left);
        } else if (value > currentNode.value) {
            currentNode.right = this.#recursiveDelete(value, currentNode.right);
        } else {
            // Node with only one child or no child
            if (currentNode.left === null && currentNode.right === null) return null;
            else if (currentNode.left === null) return currentNode.right;
            else if (currentNode.right === null) return currentNode.left;
            else {
                // Node with two children: Get the inorder successor (smallest in the right subtree)
                let temp = this.#findMin(currentNode.right);
                // Copy the inorder successor's content to this node
                currentNode.value = temp;
                // Delete the inorder successor
                currentNode.right = this.#recursiveDelete(temp.value, currentNode.right);
            }
        }
        return currentNode;
    }

    rDelete(value) {
        this.root = this.#recursiveDelete(value, this.root);
    }
}

const myBst = new RecursiveBST();
myBst.rInsert(47);
myBst.rInsert(21);
myBst.rInsert(76);
myBst.rInsert(18);
myBst.rInsert(52);
myBst.rInsert(82);
myBst.rInsert(27);

myBst.rDelete(27);
console.log(myBst); 