var isHappy = function(n, count) {
    
    if(!count){
        count = 0;
    }
    
    if(n === 1){
       return true;
    }
    
    if(count > 30){
       return false;
    }
    
    let newNum = n.toString()
    .split('')
    .map(function(digit){return parseInt(digit, 10)})
    .reduce(function(total, digit){return total + digit*digit}, 0)
    
    count++;
    
    return isHappy(newNum, count);
    
    
};
