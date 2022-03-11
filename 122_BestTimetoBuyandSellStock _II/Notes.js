

var maxProfit = function(prices) {
    
    let profit = 0;
    let buy = prices[0];
    let sell = prices[1];
    
    
    for(let i=0; i<prices.length; i++){
        buy = Math.min(buy, prices[i]);
        sell = Math.max(sell, prices[i]);
        profit = sell - buy;
    }
    
    return profit;
};
