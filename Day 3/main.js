let assert = require('assert');

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let serialize = function (root) {
  let queue = [root];
  let str = '';
  while (queue.length > 0) {
    let node = queue.shift();
    if (node) {
      str += node.val + ',';
      queue.push(node.left);
      queue.push(node.right);
    } else {
      str += 'null,';
    }
  }
  return str.slice(0, -1);
}

let deserialize = function (str) {
  let arr = str.split(',');
  let root = new Node(arr[0]);
  let queue = [root];
  let i = 1;
  while (queue.length > 0) {
    let node = queue.shift();
    if (arr[i] !== 'null') {
      node.left = new Node(arr[i]);
      queue.push(node.left);
    }
    i++;
    if (arr[i] !== 'null') {
      node.right = new Node(arr[i]);
      queue.push(node.right);
    }
    i++;
  }
  return root;
}

let serializeRecursive = function (root) {
  let res = [];
  let traversal = (node) => {
      if(node === null) {
          res.push(null);
          return;
      }
      res.push(node.val);
      traversal(node.left);
      traversal(node.right)
  }
  traversal(root);

  return res;
}

let deserializeRecursive = function (arr) {
  let reverseTraversal = () => {
      if(arr.length == 0) {
          return ;
      }

      const val = arr.shift();

      if(val == null) return null;

      let node = new Node(val);

      node.left = reverseTraversal();

      node.right = reverseTraversal();

      return node;
  }

  return reverseTraversal();
}

let node = new Node('root', new Node('left', new Node('left.left')), new Node('right'));

console.log(deserialize(serialize(node)).left.left.val === 'left.left');
console.log(deserializeRecursive(serializeRecursive(node)).left.left.val === 'left.left');

// console.log(serialize(node));
// console.log(deserialize(serialize(node)));
// console.log(serializeRecursive(node));
// console.log(deserializeRecursive(serializeRecursive(node)));
