

var majorityElement = function(nums) {
    let newArr = [];
    for (let i = 0; i<nums.length; i++){
      newArr = nums.filter(x => x == nums[i]);
        if (newArr.length > (nums.length)/2){
            return nums[i]
        } else {
            newArr = [];
        }
    }
};
