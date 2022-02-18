
var majorityElement = function(nums) {
    let majority = 0;
    let obj = {};
    let value;
    
    for(let i = 0; i < nums.length; i++){
        if (obj[nums[i]]){
           obj[nums[i]]++
        }
        else{
            obj[nums[i]] = 1;
        }
        
        if (obj[nums[i]] > majority){
           majority = obj[nums[i]];
            value = nums[i];
        }
        
    }
    
    return value;
    
    
};
