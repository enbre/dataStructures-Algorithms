//  one of the most famous and widely used algorithms around
// 
// Finds the shortest path between two vertices on a graph "shortest route from A to B"

// real world applications: GPS route finding, network routing, biology (virus spread), airline tickets

class WeightedGraph {
   constructor() {
      this.adjacencyList = {};
   }
   addVertex(vertex) {
      if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
   }
   addEdge(v1, v2, weight) {
      this.adjacencyList[v1].push({
         node: v2,
         weight
      });
      this.adjacencyList[v2].push({
         node: v1,
         weight
      });
   }
   Dijkstra(start, finish) {
      const nodes = new PriorityQueue();
      const distances = {};
      const previous = {};
      let smallest;
      let path = [];

      //         build up initial state
      for (let vertex in this.adjacencyList) {
         if (vertex === start) {
            distances[vertex] = 0;
            nodes.enqueue(vertex, 0);
         } else {
            distances[vertex] = Infinity;
            nodes.enqueue(vertex, Infinity);
         }
         previous[vertex] = null;
      }
      //         as long as there is something left to visit
      while (nodes.values.length) {
         smallest = nodes.dequeue().value;
         //             console.log('smallest:',smallest)
         if (smallest === finish) {
            while (previous[smallest]) {
               path.push(smallest);
               smallest = previous[smallest];
            }
            break;

            //                 we are done - build up the path to return at the end
         }
         if (smallest || distances[smallest] !== Infinity) {
            for (let neighbor in this.adjacencyList[smallest]) {
               let nextNode = this.adjacencyList[smallest][neighbor]
               //                     console.log("next node:", nextNode)

               let candidate = distances[smallest] + nextNode.weight;
               let nextNeighbor = nextNode.node;
               if (candidate < distances[nextNeighbor]) {
                  //                         updating new smallest distance to neighbor
                  distances[nextNeighbor] = candidate;
                  //                         updating previous - How we got to neighbor
                  previous[nextNeighbor] = smallest;
                  //                         enqueue in priorityqueue with new priority
                  nodes.enqueue(nextNeighbor, candidate);
               }
            }
         }
      }

      return path.concat(smallest, distances[finish]).reverse()

   }
}

// basic priorityqueue -  not optimized
class PriorityQueue {
   constructor() {
      this.values = [];
   }
   enqueue(value, priority) {
      this.values.push({
         value,
         priority
      });
      this.sort();
   };
   dequeue() {
      return this.values.shift();
   };
   sort() {
      return this.values.sort((a, b) => a.priority - b.priority);
   };
}

let g = new WeightedGraph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B", 4)
g.addEdge("A", "C", 2)
g.addEdge("B", "E", 3)
g.addEdge("C", "F", 4)
g.addEdge("D", "E", 3)
g.addEdge("D", "F", 1)
g.addEdge("E", "F", 1)
g.addEdge("C", "D", 2)


// pick current shortest path 