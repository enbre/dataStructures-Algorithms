// Heaps are a form of tree with additional conditions
// lots of different types of heaps

// max and min binary heap 
// max - all parents are larger than their children
// min - all children are larger than their parents
// neither one is sorted, and no relation (greater/lessor) than their siblings
// they are as compact as possible: all children of each node are as full as they can be; left children filled out first

// notes all for Max Binary Heaps (MBN). Converse for Min Binary Heaps

// If MBN is represented as an array, for any node's index, its children are 2n+1 (L) and 2n+2(R)
// To find a node's parent, Math.floor((n-1)/2)
// easy to represent as an array since parent/children can be determined via math

// To add to a MBN, add it to the end and have the new value bubble up to find its correct place
// compare the newNode to its parent; if newNode is bigger than parent, swap them. Continue as needed


class MaxBinaryHeap {
   constructor() {
      this.values = [41, 39, 33, 18, 27, 12];
   }
   insert(value) {
      this.values.push(value);
      this.bubbleUp();
   }
   bubbleUp() {
      let index = this.values.length - 1;
      const element = this.values[index];
      while (index > 0) {
         let parentIndex = Math.floor((index - 1) / 2);
         let parent = this.values[parentIndex];
         if (element <= parent) break;
         this.values[parentIndex] = element;
         this.values[index] = parent;
         index = parentIndex;
      }

   }
   extractMax() {
      const max = this.values[0];
      const end = this.values.pop();
      if (this.values.length > 0) {
         this.values[0] = end;
         this.sinkDown();
      }
      return max;
   }
   sinkDown() {
      let index = 0;
      const length = this.values.length;
      const element = this.values[0];
      while (true) {
         let rightChildIdx = 2 * index + 1;
         let leftChildIdx = 2 * index + 2;
         let leftChild, rightChild;
         let swap = null;
         if (leftChildIdx < length) {
            leftChild = this.values[leftChildIdx];
            if (leftChild > element) {
               swap = leftChildIdx;
            }
         }

         if (rightChildIdx < length)
            rightChild = this.values[rightChildIdx];
         if (
            (swap === null && rightChild > element) ||
            (swap !== null && rightChild > leftChild)
         ) {
            swap = rightChildIdx;
         }
         if (swap === null) break;
         this.values[index] = this.values[swap];
         this.values[swap] = element;
         index = swap;
      }
   }
}


let heap = new MaxBinaryHeap();

// real world examples: priority queue
// priority queue is a separate structure/idea from heap

// Time complexity - insertion: O(log N), removal: O(log N), Search: O(N)
// Not really meant to be searchable: no logic for sibling relations