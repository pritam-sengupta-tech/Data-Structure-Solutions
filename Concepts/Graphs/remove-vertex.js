class Graph {
    constructor() {
        this.adjacencyList = {}; // Initialize an empty adjacency list
    }

    addVertex (vertex) {
        if(!this.adjacencyList[vertex]) { //NO duplicate allowed
            this.adjacencyList[vertex] = []; //Initialize with empty array meaning there is no connection any other vertex; 
            return true;
        }
        return false;
    }

    addEdge (vertex1, vertex2) {
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) { //Add edge if and only if vertex1 & vertex2 is present in the object;
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
            return true;
        }
        return false;
    }

    removeEdge (vertex1, vertex2) {
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) { //Check if vertex are present or not
            this.adjacencyList[vertex1] =  this.adjacencyList[vertex1].filter(v => v !== vertex2); //return all items except the vertex2
            this.adjacencyList[vertex2] =  this.adjacencyList[vertex2].filter(v => v !== vertex1); //return all item except the vertex1 
            return true;
        }
        return false;
    }

    removeVertex (vertex) {
        if(!this.adjacencyList[vertex]) return undefined;
        while(this.adjacencyList[vertex].length) {
            let temp = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, temp);
        }
        delete this.adjacencyList[vertex];
        return this;
    }
}

myGraph = new Graph();
myGraph.addVertex('A');
myGraph.addVertex('B');
myGraph.addVertex('C');
myGraph.addEdge('A', 'B');
myGraph.addEdge('A', 'C');
myGraph.removeVertex('B');
console.log(myGraph.adjacencyList);