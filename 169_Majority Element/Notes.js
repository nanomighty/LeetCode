
var majorityElement = function(nums) {
    let valueACount = 1;
    let valueA = nums[0];
    let valueBCount = 0;
    let valueB;
    
    for (let i = 1; i<nums.length; i++){
        if (nums[i] == valueA){
            valueACount++;
        } else{
            valueB = nums[i];
            valueBCount++;
        }
    } 
    
    if (valueACount > valueBCount){
        return valueA;
    } else {
        return valueB;
    }
};
