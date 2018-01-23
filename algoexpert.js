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

//Binary Search: Solution 1 - O(logn)
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
function binarySearch(array, target) {
  let leftPtr = 0;
  let rightPtr = array.length - 1;

  while (leftPtr <= rightPtr) {
    let middle = Math.floor((leftPtr + rightPtr) / 2);
    if (array[middle] === target) return middle;
    else if (array[middle] < target) {
      leftPtr = middle + 1;
    } else {
      rightPtr = middle - 1;
    }
  }

  return -1;
}

//Find three largest numbers
function findThreeLargestNumbers(array) {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > third) {
      first = second;
      second = third;
      third = array[i];
    } else if (array[i] > second) {
      first = second;
      second = array[i];
    } else if (array[i] > first) {
      first = array[i];
    }
  }

  return [first, second, third];
}

//Bubble Sort
function bubbleSort(array) {
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
        swapped = true;
      }
    }
  }
  return array;
}

//Three Sum
function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  const triplets = [];

  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      let currentSum = array[i] + array[left] + array[right];
      if (currentSum === targetSum) {
        triplets.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) left++;
      else if (currentSum > targetSum) right--;
    }
  }

  return triplets;
}

//Smallest Difference
function smallestDifference(arrayOne, arrayTwo) {
  let result = [];
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let ptr1 = 0;
  let ptr2 = 0;
  let current = Infinity;
  let smallest = Infinity;

  while (ptr1 < arrayOne.length && ptr2 < arrayTwo.length) {
    let num1 = arrayOne[ptr1];
    let num2 = arrayTwo[ptr2];

    if (num1 < num2) {
      current = num2 - num1;
      ptr1++;
    } else if (num1 > num2) {
      current = num1 - num2;
      ptr2++;
    }
    else {
      return [num1 - num2]
    }

    if (smallest > current){
      smallest = current;
      result = [num1, num2];
    }
  }

  return result;
}
