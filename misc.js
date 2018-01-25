// Write a function that takes an input string and exports a new string like the example given below:

// "aabbcc" -> "a2b2c2"
// "rrrrfsddd" -> "r4f1s1d3"
// "aaa" -> "a3"

function transformString(str) {
  let arr = str.split('');
  let counter = 1;
  let curChar = arr[0];
  let result = [];

  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] === curChar) {
      counter++;
    } else {
      let text = curChar + counter;
      result.push(text);
      counter = 1;
      curChar = arr[i];
    }
  }

  return result.join('');
}

//Sell Stock problem

function getMaxProfit(stockPrices) {
  if (stockPrices.length < 2) {
    throw new Error('Need to have at least 2 prices to calculate profit');
  }

  let minPrice = stockPrices[0];
  let maxProfit = stockPrices[1] - stockPrices[0];

  for (let i = 1; i < stockPrices.length; i++) {
    let currentPrice = stockPrices[i];
    let currentProfit = stockPrices[i] - minPrice
    maxProfit = Math.max(maxProfit, currentProfit);
    minPrice = Math.min(minPrice, currentPrice);
  }

  return maxProfit;
}
