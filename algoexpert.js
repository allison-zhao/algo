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
