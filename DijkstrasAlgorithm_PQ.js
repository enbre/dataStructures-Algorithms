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
      let path = []; // to return at the end

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

      return path.concat(smallest, {
         'Distance:': distances[finish]
      }).reverse()
      return path.concat(smallest).reverse()

   }
}
class PriorityQueue {
   constructor() {
      this.values = [];
   }
   enqueue(value, priority) {
      let newNode = new Node(value, priority);
      this.values.push(newNode);
      this.bubbleUp();
   }
   bubbleUp() {
      let idx = this.values.length - 1;
      const element = this.values[idx];
      while (idx > 0) {
         let parentIdx = Math.floor((idx - 1) / 2);
         let parent = this.values[parentIdx];
         if (element.priority >= parent.priority) break;
         this.values[parentIdx] = element;
         this.values[idx] = parent;
         idx = parentIdx;
      }
   }
   dequeue() {
      const min = this.values[0];
      const end = this.values.pop();
      if (this.values.length > 0) {
         this.values[0] = end;
         this.sinkDown();
      }
      return min;
   }
   sinkDown() {
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];
      while (true) {
         let leftChildIdx = 2 * idx + 1;
         let rightChildIdx = 2 * idx + 2;
         let leftChild, rightChild;
         let swap = null;

         if (leftChildIdx < length) {
            leftChild = this.values[leftChildIdx];
            if (leftChild.priority < element.priority) {
               swap = leftChildIdx;
            }
         }
         if (rightChildIdx < length) {
            rightChild = this.values[rightChildIdx];
            if (
               (swap === null && rightChild.priority < element.priority) ||
               (swap !== null && rightChild.priority < leftChild.priority)
            ) {
               swap = rightChildIdx;
            }
         }
         if (swap === null) break;
         this.values[idx] = this.values[swap];
         this.values[swap] = element;
         idx = swap;
      }
   }
}

// class Node {
//     constructor(value, priority){
//         this.value = value;
//         this.priority = priority;
//     }
// }


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