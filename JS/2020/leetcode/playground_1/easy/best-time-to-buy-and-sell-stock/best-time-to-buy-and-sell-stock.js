const maxProfit = prices  => {

  if (prices.length < 2) return 0;

  let maxProfit = 0;
  let minBuy = prices[0]
  let sell = prices[1];
  maxProfit = Math.max(maxProfit, sell - minBuy);

  let i = 0;

  while (i < prices.length - 1) {
    minBuy = Math.min(minBuy, prices[i]);
    sell = prices[i + 1];
    maxProfit = Math.max(maxProfit, sell - minBuy);
    i++;
  }

  return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4]))
