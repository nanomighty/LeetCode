
var minimumTime = function(time, totalTrips) {
    
    let tripCount = 0;
        
    let timeCount = 1;
    while(tripCount < totalTrips){
        
        for(let i = 0; i<time.length; i++){
            if(timeCount >= time[i]){
                tripCount += Math.floor(timeCount/time[i]);
            }
        }
        
        if(tripCount < totalTrips){
            tripCount = 0;
        }
        
        timeCount++  
    }
    
    timeCount = timeCount - 1;
    
    return timeCount;
};


