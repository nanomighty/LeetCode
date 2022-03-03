
var minimumTime = function(time, totalTrips) {
  let low = 1;
  let high = 100000000000000 + 1;
    
    while (low < high){
          let mid = Math.floor((low+high)/2);
    
          if(isEnough(mid)){
              high = mid;
          } else{
              low = mid + 1;
          }
    } return low;
    
    function isEnough(midTime){
        let trips = 0;
        for(let i = 0; i<time.length; i++){
            trips += Math.floor(midTime/time[i]);  
        }
        return trips >= totalTrips;
    }
};
