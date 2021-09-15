// Very similar to singly lists, but nodes have both a previous and a next pointer connection



class Node {
   constructor(val) {
      this.val = val;
      this.next = null;
      this.prev = null;
   }
}

class DoublyLinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }
   push(val) {
      let newNode = new Node(val);
      if (this.length === 0) {

         this.head = newNode;
         this.tail = newNode;
      } else {
         this.tail.next = newNode;
         newNode.prev = this.tail;
         this.tail = newNode;
      }

      this.length++;
      return this;
   }
   pop() {
      if (!this.head) return undefined;
      let poppedNode = this.tail;
      if (this.length === 1) {
         this.head = null;
         this.tail = null;
      } else {
         this.tail = poppedNode.prev;
         this.tail.next = null;
         poppedNode.prev = null;
      }
      this.length--;
      return poppedNode;
   }
   shift() {
      if (!this.head) return undefined;
      let removedNode = this.head;
      if (this.length === 1) {
         this.head = null;
         this.tail = null;
      } else {
         this.head = removedNode.next;
         this.head.prev = null;
         removedNode.next = null;
      }
      this.length--;
      return removedNode;
   }
   unshift(val) {
      let newNode = new Node(val);
      if (this.length === 0) {
         this.head = newNode;
         this.tail = newNode;
      } else {
         newNode.next = this.head;
         this.head.prev = newNode;
         this.head = newNode;

      }
      this.length++;
      return this;
   }
   get(idx) {
      if (idx < 0 || idx >= this.length) return null;
      let count;
      let foundNode;
      if (this.length / 2 > idx) {
         count = 0;
         foundNode = this.head;
         while (count > idx) {
            foundNode = foundNode.next;
            count++;
         }
      } else {
         count = this.length - 1;
         foundNode = this.tail;
         while (count < idx) {
            foundNode = foundNode.prev;
            count--;
         }
      }
      return foundNode;
   }
   set(idx, val) {
      let foundNode = this.get(idx);
      if (foundNode != null) {
         foundNode.val = val;
         return true;
      }
      return false;
   }
   insert(idx, val) {
      if (idx < 0 || idx > this.length) return false;
      if (idx === 0) return !!this.unshift(val);
      if (idx === this.length) return !!this.push(val);

      let newNode = new Node(val);
      let prevNode = this.get(idx - 1);
      let afterNode = prevNode.next;

      prevNode.next = newNode, newNode.prev = prevNode;
      newNode.next = afterNode, afterNode.prev = newNode;

      console.log('newNode', newNode, 'prevNode:', prevNode, 'afterNode:', afterNode)
      console.log("----------------------")
      console.log('newNode.prev:', newNode.prev, 'newNode.next:', newNode.next)


      this.length++;
      return true;
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
   remove(idx) {
      if (idx < 0 || idx >= this.length) return undefined;
      if (idx === 0) return this.shift();
      if (idx === this.length - 1) return this.pop();

      let removedNode = this.get(idx);
      let prevNode = removedNode.prev;
      let afterNode = removedNode.next;

      prevNode.next = afterNode, afterNode.prev = prevNode;
      removedNode.next = null, removedNode.prev = null;

      this.length--;
      return removedNode;
   }
}

let list = new DoublyLinkedList()
list.push("Hoppy")
list.push("Ales")
list.push("are")
list.push("tasty")



// Time complexity: insertion O(1), removal: O(1), searching: O(n), access: O(n)

// Very similar to singly linked lists, but the previous pointer speeds up some searching but it increases the memory needed.