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
}

const myBst = new RecursiveBST();
myBst.rInsert(47);
myBst.rInsert(21);
myBst.rInsert(76);
// myBst.rInsert(18);
// myBst.rInsert(52);
// myBst.rInsert(82);
// myBst.rInsert(27);

console.log(myBst);