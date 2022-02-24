
var maxProfit = function(prices) {
    
    let minP = prices[0];
    let minInd = 0;
    let maxP = 0;
    
    for(let i = 1; i<prices.length; i++){
       if(prices[i]<minP){
           minP = prices[i];
           minInd = i;
           maxP = prices[i];
       }
    }
    
    for(let j = minInd; j<prices.length; j++){
       if(prices[j] > maxP){
           maxP = prices[j];
       }
    }
    
    if(maxP == minP){
       return 0;
    }else if(maxP > minP){
        let profit = maxP - minP;
        return profit;
    }
    
};
