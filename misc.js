// Write a function that takes an input string and exports a new string like the example given below:

// "aabbcc" -> "a2b2c2"
// "rrrrfsddd" -> "r4f1s1d3"
// "aaa" -> "a3"

function transformString(str) {
  let arr = str.split('');
  let counter = 1;
  let curChar = arr[0];
  let result = []

  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] === curChar) {
      counter++;
    } else {
      let text = curChar + counter;
      result.push(text);
      counter = 1;
      curChar = arr[i]
    }
  }

  return result.join('');
}

