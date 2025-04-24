class Graph {
    constructor() {
        this.adjacencyList = {}; // Initialize an empty adjacency list
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) { //NO duplicate allowed
            this.adjacencyList[vertex] = []; //Initialize with empty array meaning there is no connection any other vertex; 
            return true;
        }
        return false;
    }
}

myGraph = new Graph();
myGraph.addVertex('A');
console.log(myGraph.adjacencyList);