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


function calculatesFarePrice(start, end){
  
  const total_distance = distanceTravelledInFeet(start, end)
  
  let fare; 
  
  switch(true){
    case (total_distance <= 400) : fare = 0
    break;
    case (total_distance > 400 && total_distance <= 2000) : fare = ((total_diastance -400) * 0.02)
    break;
    case (total_distance > 2000 && total_distance <= 2500) : fare = 25
    break;
    default : return "cannot travel that far"
    }
  
  return fare; 
  
  
}