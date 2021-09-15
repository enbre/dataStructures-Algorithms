// Collection of nodes and their connections
// No order between nodes (head/root/etc)

// real world implementations: social networks, the internet, map wayfinding (googlemaps), internet recommendations "items you might enjoy"

// terminology: vertex - node, edge - connection, 

//  a tree is a type of graph with only one way to reach each vertex
// directed graph: edges can only be traversed in one direction (twitter)
// undirected graph: edges can be traversed either direction (facebook)
// weighted graph: there are values attributed to edges (distances along various roads to get from A to B)

// adjacency matrix - all connections between nodes stored as a grid, often with ones (positive connection) and zeroes (non-connection)
// takes more space, slower to iterate over all edges, faster to look up specific edge

// adjacency list - 2D array of connections between nodes. Can use a hash table to map each connection
// takes up less space, faster to interate over all edges, slower to look up specific edge

// Most data in the world tends to be larger and/or sparse, so adjacency lists generally make more sense to use


// not considering edge cases in this implementation 
class Graph {
   constructor() {
      this.adjacencyList = {}
   }
   addVertex(vertex) {
      if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
   }
   addEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
   }
   removeEdge(v1, v2) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter(
         v => v !== v2
      );
      this.adjacencyList[v2] = this.adjacencyList[v2].filter(
         v => v !== v1
      )
   }
   removeVertex(vertex) {
      while (this.adjacencyList[vertex].length) {
         const adjacenctVertex = this.adjacencyList[vertex].pop();
         this.removeEdge(adjacenctVertex, vertex)
      }
      delete this.adjacencyList[vertex];
   }
   depthFirstRecursive(start) {
      let results = [];
      let visited = {};
      const adjacencyList = this.adjacencyList;

      const dfs = (vertex) => {
         if (!vertex) return null;

         results.push(vertex);
         visited[vertex] = true;

         adjacencyList[vertex].forEach(neighbor => {
            if (!visited[neighbor]) {
               return dfs(neighbor)
            }
         })
      }
      dfs(start);

      return results;
   }
   depthFirstIterative(start) {
      let stack = [start];
      let results = [];
      let visited = {};
      let current;

      visited[start] = true;
      while (stack.length) {
         console.log(stack)
         current = stack.pop();
         results.push(current);
         this.adjacencyList[current].forEach(neighbor => {
            if (!visited[neighbor]) {
               visited[neighbor] = true;
               stack.push(neighbor);
            }
         })
      }
      return results;
   }
   //     visiting all of a vertex's neighbors before moving on 
   breadthFirst(start) {
      let queue = [start];
      let results = [];
      let visited = {};
      visited[start] = true;
      let current;

      while (queue.length) {
         current = queue.shift();
         results.push(current)
         this.adjacencyList[current].forEach(neighbor => {
            if (!visited[neighbor]) {
               visited[neighbor] = true;
               queue.push(neighbor);
            }
         })

      }
      return results;
   }
}


let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

// graph traversal: checking/searching/updating each vertex in a graph
// we need to specify a starting point

// dfs - depth first search 
// move away from the root
// really important to remember which vertexes have been visited



// bfs - breadth first search