
var isHappy = function(n) {
    if(n < 0 ){
        return false;
    }
    
    let arr = n.toString().split('');
    let sum = 0;
    
    if (sum = 0 || sum > 1){
        for(let i=0; i<arr.length;i++){
            sum += (arr[i])^2;
        }
    }
    
    if (sum = 1){
        return true;
    }
};
