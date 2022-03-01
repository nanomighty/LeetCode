
var minSteps = function(s, t) {
    let sObj = {};
    let tObj = {};
    
    for(let char of s){
        sObj[char] = sObj[char] + 1 || 1
    }
    
    for(let char of t){
        if(sObj[char]){ sObj[char] -= 1}
    }
    
    for(let char of t){
        tObj[char] = tObj[char] + 1 || 1
    }
    
    for(let char of s){
        if(tObj[char]){ tObj[char] -= 1}
    }
    
    let sArray = Object.values(sObj);
    let tArray = Object.values(tObj);
    
    let sum = 0;
    
    for(let val of sArray){
        sum += val;
    }
    
    for(let val of tArray){
        sum += val;
    }
    
    return sum;
};
