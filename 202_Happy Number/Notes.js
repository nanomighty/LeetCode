
var isHappy = function(n) {
    
    let seen = {};
    
    seen[n]=true;
    
    while (true) {
           
        let arr = n.toString().split('');
        
        
        arr.map(function(digit){return parseInt(digit)})
        .reduce(function(total, digit){return total + digit*digit}, 0)
        
        if(seen[n] === 1){
            return true;
        } else if (seen[n]){
            return false;
        } else {
            seen[n] = true;
        }
        }
};
