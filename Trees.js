// trees vs lists vs arrays

// kinds of trees: trees, binary trees, binary search trees
// tree: any number of nodes
// binary tree: each node can have no more than 2 children
// binary search trees: binary tree that can be sorted. all nodes larger than the parent are located to the left, while nodes larger than the parent are on the right

// collection of nodes in a series of parent/child relationships

// lists = linear, trees = non-linear

// singly linked list - kind of a special case tree: each node only has one child
// nodes need to trace back to root (initial node)

// root = top node
// child = node directly connected to another node when moving away from the root
//  parent = the converse of a child
// sibling = group of nodes with the same parent
// leaf = node with no children
// edge = connections between nodes

//  real world examples: HTML, computer file directory, json

// searching a BST works just like binary search. comparing the item you are looking for to each node (greater/less than?)


class Node {
   constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
   }
}

class BinarySearchTree {
   constructor() {
      this.root = null;
   }
   insert(value) {
      let newNode = new Node(value);
      if (this.root === null) {
         this.root = newNode;
         return this;
      }
      let current = this.root;
      while (true) {
         if (value === current.value) return undefined;
         if (value < current.value) {
            if (current.left === null) {
               current.left = newNode;
               return this;
            }
            current = current.left;
         } else {
            if (current.right === null) {
               current.right = newNode;
               return this;
            }
            current = current.right;
         }
      }
   }
   find(value) {
      if (this.root === null) return false;
      let current = this.root;
      let found = false;
      while (current && !found) {
         if (value < current.value) {
            current = current.left;
         } else if (value > current.value) {
            current = current.right;
         } else {
            return true;
         }
      }
      return false;
   }
   BFS() {
      let node = this.root,
         data = [],
         queue = []

      queue.push(node);
      while (queue.length) {
         node = queue.shift();
         data.push(node.value);
         if (node.left) queue.push(node.left);
         if (node.right) queue.push(node.right);
      }
      return data;
   }
   DFSPreOrder() {
      let data = []
      const traverse = (node) => {
         data.push(node.value);
         if (node.left) traverse(node.left);
         if (node.right) traverse(node.right);

      }
      traverse(this.root);
      return data;
   }
   DFSPostOrder() {
      let data = []
      const traverse = (node) => {
         if (node.left) traverse(node.left);
         if (node.right) traverse(node.right);
         data.push(node.value);

      }
      traverse(this.root);
      return data;
   }
   DFSInOrder() {
      let data = [];
      const traverse = (node) => {
         if (node.left) traverse(node.left);
         data.push(node.value);
         if (node.right) traverse(node.right);
      }
      traverse(this.root);
      return data;
   }



}


let tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)

tree.DFSPreOrder();
tree.DFSPostOrder();
tree.DFSInOrder();

// time complexity -  insertion: O(log n), Searching: O(log n)
//  really fast to search or insert, as long as the tree is not one sided

// traversing trees (any kind of tree, not just binary trees):
// two main approaches: breadth first & depth first
// breadth first search - searching across each level of tree (horizontal)
// depth first search- searching down each path of tree (vertical)

// BFS - 
// 1. create a queue with all nodes and a variable to store nodes that have been visited
// 2. place root in queue
// 3. loop as long there is something in the queue
// 4. as each node is visited, dequeue it from queue and add it to variable of visited nodes
// 5. return variable of visited nodes

// DFS - pre order, post order, in order
// PreOrder: start with root, add everything along left, then add everything to right
// 1.create a variable to store the values of nodes visited
// 2. store the root of BST in a variable called current
// 3. write a helper function which accepts a node
//      push the value of node to list of variables visited
//      if node has a left, call the helper function with the left property
//      if node has a rigtht, call the helper function with the right property
// 4. invoke the helper function with the current variable
// 5. return the list of visited values

// DFS - post order: add a node after left and right have been visited
// DFS in order: add node after left has been visited but before the right has been visited

// which tree traversal to use?
// Time complexity is always the same: each node gets visited once
// space complexity - depends on how the tree is constructed. wide trees- use depth first; tall trees- use breadth first
// as for which depth first search to use, in order returns the tree data sorted. preOrder returns data that is easy to recreate the tree (starts with root)