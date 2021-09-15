// Ordered data structure
// differs from array in that there's no index. Elements (nodes) point to element after it with "next" pointer (one direction connection).
// Three parameters: Head (start), tail (end) and length. After tail is null
// Random access is not allowed ("What is at index 7?"). Data must be accessed by moving through preceding elements

// piece of date - val
// reference to next node - next

class Node {
   constructor(val) {
      this.val = val;
      this.next = null;
   }
}

class SinglyLinkedList {
   constructor() {
      this.length = 0;
      this.head = null;
      this.tail = null;

   }
   push(val) {
      let newNode = new Node(val);
      if (!this.head) {
         this.head = newNode;
         this.tail = this.head;
      } else {
         this.tail.next = newNode;
         this.tail = newNode;
      }
      this.length++;
      return this;
   }
   pop() {
      if (!this.head) return undefined;
      let current = this.head;
      let newTail = current;
      while (current.next) {
         newTail = current;
         current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
         this.head = null;
         this.tail = null;
      }
      return current;
   }
   shift() {
      if (this.length === 0) return undefined;
      let oldhead = this.head;
      this.head = oldhead.next;
      this.length--;
      if (this.length === 0) {
         this.tail = null;
      }
      return oldhead;
   }
   unshift(val) {
      let newNode = new Node(val);
      if (this.length === 0) {
         this.head = newNode;
         this.tail = this.head;
      } else {
         newNode.next = this.head;
         this.head = newNode;
      }
      this.length++;
      return this;
   }
   get(idx) {
      if (idx < 0 || idx >= this.length) return null;
      let counter = 0;
      let current = this.head;
      while (counter !== idx) {
         current = current.next;
         counter++;
      }

      return current;
   }
   set(val, idx) {
      let foundNode = this.get(idx);
      if (foundNode) {
         foundNode.val = val;
         return true;
      }
      return false;
   }
   insert(val, idx) {
      if (idx < 0 || idx > this.length) return false;
      if (idx === this.length) return !!this.push(val);
      if (idx == 0) return !!this.unshift(val);

      let newNode = new Node(val);
      let prev = this.get(idx - 1);
      let temp = prev.next;
      prev.next = newNode;
      newNode.next = temp;
      this.length++;
      return true;
   }
   remove(idx) {
      if (idx < 0 || idx >= this.length) return undefined;
      if (idx === this.length - 1) return this.pop();
      if (idx === 0) return this.shift();


      let prevNode = this.get(idx - 1);
      let remNode = prevNode.next;
      prevNode.next = remNode.next;
      this.length--;
      return remNode
   }
   print() {
      let arr = [];
      let current = this.head
      while (current) {
         arr.push(current.val)
         current = current.next
      }
      console.log(arr);
   }

   reverse() {
      //      swaps head and tail:
      let currentNode = this.head;
      this.head = this.tail;
      this.tail = currentNode;

      let next = null;
      let prev = null;

      for (let i = 0; i < this.length; i++) {
         next = currentNode.next;
         currentNode.next = prev;
         prev = currentNode;
         currentNode = next;
      }
      return this;
   }

}




let list = new SinglyLinkedList()

list.push("hello")
list.push("how")
list.push("are")
list.push("you?")

// time complexity - insertion: O(n), removal: O(1)-beginning or O(n)-end, searching: O(n), access: O(n)
// Great and searching and deleting but not good for random access (finding something at a given index)
// space complexity: 