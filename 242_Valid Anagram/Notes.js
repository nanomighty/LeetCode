
var isAnagram = function(s, t) {
    let newS = s.split('').sort();
    let newT = t.split('').sort();
    
    if (newS.length !== newT.length) {
       return false;
    }
    
    for(let i = 0; i < newS.length; i++){
    if(newT.indexOf(newS[i])==-1){
           return false;
       }
    }
    
    for(let j = 0; j < newT.length; j++){
       if(newS.indexOf(newT[j])==-1){
           return false;
       }
    }
    
    return true;
};
