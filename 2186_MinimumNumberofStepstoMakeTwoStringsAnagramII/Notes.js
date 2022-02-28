
var minSteps = function(s, t) {
    let tracking = 0;
    
    
    for(let i = 0; i<s.length; i++){
        if(t.indexOf(s[i]) == -1){*/
var minSteps = function(s, t) {
    let tracking = 0;
    
    
    for(let i = 0; i<s.length; i++){
        if(t.indexOf(s[i]) == -1){
            tracking++;
        }
    }
    
    for(let j=0; j<t.length; j++){
        if(s.indexOf(t[j]) == -1){
            tracking++;
        }
    }
    
    return tracking;
};


            tracking++;
        }
    }
    
    for(let j=0; j<t.length; j++){
        if(s.indexOf(t[j]) == -1){
            tracking++;
        }
    }
    
    return tracking;
};

