
var prefixCount = function(words, pref) {
    let count = 0;
    
    for (let i=0; i<words.length; i++){
        
        let output = words[i].indexOf(pref);
        if(output > 0){
            count++;
        } 
    }
    
    return count;
    
};
