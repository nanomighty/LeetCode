
var firstUniqChar = function(s) {
    
   let seen = {};
   for(let i=0; i<s.length; i++){
       if(!seen[s[i]]){
           seen[s[i]] = 1;
       } else{
           seen[s[i]]++
       }
   } 
    
    
   for(let j=0; j<s.length; j++){
       if(seen[s[j]]==1){
           return j;
       }
   }
    
    return -1;
    
};
