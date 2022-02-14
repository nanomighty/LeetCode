
var romanToInt = function(s) {
    
    let symbols = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    };
    
    let i = 0;
    let sum = 0;
    
    while (i < s.length-1){
        if (symbols[s[i]] < symbols[s[i+1]]){
            sum += symbols[s[i+1]] - symbols[s[i]];
            i+=2;
        } else {
            sum += symbols[s[i]];
            i++;
        }
    }
    
    if (i == s.length-1){
        sum += symbols[s[i]];
    }
    return sum;
    

};
