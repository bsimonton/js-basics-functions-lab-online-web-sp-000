// Code your solution in this file!

function distanceFromHqInBlocks(street){
  
  if (street >= 42) {return street - 42}
  else {return 42 - street}
  
  
}


function distanceFromHqInFeet(street){
  
  return (distanceFromHqInBlocks(street) * 264 )
  
  
  
}



function distanceTravelledInFeet(start, end){
  
  if (start > end){return (start - end) * 264} 
  else {return (end - start) * 264} 
  
  
}


function calculatesFarePrice(start, end ){
  
  const total_distance = distanceTravelledInFeet(start, end)
  
  let fare; 
  
  switch(total_distance){
    case (distance <= 400) : fare = 0
    break;
    case (distance > 400 && distance <= 2000) : fare = ((diastance -400) * 0.02)
    break;
    case (distance > 2000) : fare = 25
    default 
    
    
    
  }
  
  
  
  
}