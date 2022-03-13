var findKDistantIndices = function(nums, key, k) {
  let kDistantArr = [];
  let indices = [];
  let idx = nums.indexOf(key);
  
  while(idx != -1){
    indices.push(idx);
    idx = nums.indexOf(key, idx + 1);
  }
  
  for(let i=0; i<nums.length; i++){
    for(let j=0; j<indices.length; j++){
      if(Math.abs(i - indices[j]) <= k){
        kDistantArr.push(i);
      }
    }
  }
  
  kDistantArr = [... new Set(kDistantArr)];
  
  return kDistantArr;
  
  
}
