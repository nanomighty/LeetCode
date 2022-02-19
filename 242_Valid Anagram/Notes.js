
var isAnagram = function(s, t) {
    let newS = s.split('').sort();
    let newT = t.split('').sort();
    
    if (newS.length !== newT.length) {
       return false;
    }
    
    let objS = {};
    let objT = {};
    
    for(let i = 0; i<newS.length; i++){
        if(objS[newS[i]]){
           objS[newS[i]]++
        } else{
           objS[newS[i]] = 1 
        }
        
    }
    
     for(let j = 0; j<newT.length; j++){
        if(objT[newT[j]]){
           objT[newT[j]]++
        } else{
           objT[newT[j]] = 1 
        }
        
    }
    
    for (let k = 0; k < newS.length; k++){
        if (objS[newS[k]] !== objT[newS[k]]){
            return false;
        }
    }
    return true;
    
    
};
