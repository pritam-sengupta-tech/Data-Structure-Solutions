// Create a linked list in JavaScript
// A linked list is a linear data structure where each element is a separate object.
// Each node of a list is comprised of two items: the data and a reference to the next node in the list.

// Node class
// The node class is used to create a new node in the linked list.
// Each node has two properties: data and next. The data property stores the value of the node, and the next property stores a reference to the next node in the list.
class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

// LinkedList class
// The linked list class is used to create a new linked list. It has three properties: head, tail, and length. The head property stores a reference to the first node in the list, the tail property stores a reference to the last node in the list, and the length property stores the number of nodes in the list.
// The constructor takes a value as an argument and creates a new node with that value. It then sets the head and tail properties to the new node and sets the length property to 1.
class LinkedList {
    constructor(value) {
        let newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1
    }
}

// Example usage
// Create a new linked list with a single node containing the value 10
const myLinkedList = new LinkedList(10);
console.log(myLinkedList);