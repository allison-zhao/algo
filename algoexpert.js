//Two Sum

function twoNumberSum(array, targetSum) {
  let hashmap = {};
  for (let i = 0; i < array.length; i++) {
    if (hashmap[array[i]]) {
      return [targetSum - array[i], array[i]].sort((a, b) => a - b);
    } else {
      hashmap[targetSum - array[i]] = array[i];
    }
  }
  return [];
}

//Find Closest Value In BST

function findClosestValueInBst(tree, target) {
  if (tree === null) return null;
  let closest = tree.value;

  while (tree !== null) {
    if (tree.value === target) return tree.value;
    let difference = Math.abs(tree.value - target);
    if (difference < Math.abs(closest - target)) {
      closest = tree.value;
    }

    if (tree.value < target) {
      tree = tree.right;
    } else {
      tree = tree.left;
    }
  }

  return closest;
}

//DFS
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].depthFirstSearch(array);
    }
    return array;
  }
}

//Binary Search: Solution 1
function binarySearch(array, target) {
  return helper(array, target, 0, array.length);
}

function helper(array, target, left, right) {
  if (left > right) return -1;
  let middle = Math.floor((left + right) / 2);

  if (array[middle] === target) return middle;
  else if (array[middle] > target) {
    return helper(array, target, left, middle - 1);
  } else {
    return helper(array, target, middle + 1, array.length);
  }
}

//Binary Search: Solution 2

