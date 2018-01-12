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
