class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertext) {
        // if vertex doesn't already exist, add new vertex to adjacency list
        if (!this.adjacencyList[vertext]) {
            this.adjacencyList[vertext] = []
        } else {
            return false
        }
    }

    addEdge(v1, v2) {
        // if either vertex doesn't exist, return false
        if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) {
            return false
        }

        // add vertex one to vertex two's list of connected vertices
        this.adjacencyList[v2].push(v1)
        // repeat for other vertex
        this.adjacencyList[v1].push(v2)
    }

    removeEdge(v1, v2) {
        // if either vertex doesn't exist, return false
        if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) {
            return false
        }

        // filter v2 from list of connected vertices for v1
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
        // repeat for other vertex
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
    }

    removeVertex(vertex) {
        const edges = this.adjacencyList[vertex]

        // iterate over edges
        for (let edge of edges) {
            // remove edge
            this.removeEdge(vertex, edge)
        }

        // remove vertex for adjacency list
        delete this.adjacencyList[vertex]
    }
}

const graph = new Graph

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')

graph.addEdge('A', 'B')
graph.addEdge('A', 'D')
graph.addEdge('C', 'B')
graph.addEdge('C', 'D')

// graph.removeEdge('A', 'B')

graph.removeVertex('A')

console.log(graph)