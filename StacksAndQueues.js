// LIFO - last in, first out
// similar to a stack of plates

// examples:
// used to manage function invocations
// undo/redo
// web history


// using arrays, push/pop or shift/unshift are examples of stacks 

// if using a stack, a linked list makes more sense than an array (no need to have the index accessing capabilities)
// if using a singly linked list for the stack, add/remove items from the beginning of list to avoid having to search the entire list to remove
class Node {
   constructor(value) {
      this.value = value;
      this.next = null;
   }
}

class Stack {
   constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
   }
   //     adding to end
   push(value) {
      let newNode = new Node(value);
      if (this.size === 0) {
         this.first = newNode;
         this.last = newNode;
      } else {
         let oldStart = this.first;
         this.first = newNode;
         newNode.next = oldstart;
      }
      return this.size++;
   }
   //     removing from end
   pop() {
      if (!this.first) return null;
      let temp = this.first;
      if (this.size === 1) {
         this.first = null;
         this.last = null;
      } else {
         this.first = temp.next;

      }
      this.size--;
      return temp.value;
   }


}


// time complexity - insertion: O(1), removal: O(1), searching: O(n), accessing: O(n)

// ------------------------------------------------------------------------------------------
// Queues
// FIFO - first in, first out
// examples: 
// print queue, background tasks, downloading multitple items


// if using an array, unshift/pop or shift/push are examples of queues, but don't use the unshift/pop as it requires re-indexing all items each time
// add to the end and remove from the start

class Queue {
   constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
   }
   //      adding to end
   enqueue(val) {
      let newNode = new Node(val);
      if (!this.first) {
         this.first = newNode;
         this.last = newNode;
      } else {
         this.last.next = newNode;
         this.last = newNode;
      }
      return ++this.size;
   }
   //     removing from beginning
   dequeue() {
      if (!this.first) return null;
      let temp = this.first;
      if (this.first === this.last) {
         this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return temp.value;
   }
}

// time complexity- insertion: O(1), removal: O(1), searching: O(n), accessing: O(n)