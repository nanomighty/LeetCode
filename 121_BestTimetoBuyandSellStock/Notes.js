
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxPrice = 0;
    let profit = 0;
    
    
    for(let i=1; i<prices.length; i++){
        if(prices[i]<minPrice){
            minPrice = prices[i];
        
            for(let j = i+1; j<prices.length; j++){
                if(prices[j] > maxPrice){
                    maxPrice = prices[j];
                }
            } 
            
            profit = maxPrice - minPrice;
            
        }    
    }
    
    
    
    if (profit < 0){
        return 0;
    } else {
        return profit;
    }
    
};
