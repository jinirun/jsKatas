//function
function howManyDays(month){

  if(month<0 || month>12){
    return "Enter a number between 1 and 12";
  }

  let days = 28;
  switch(month){
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31;
      break;
  }
  return days;
}

module.exports = {
  howManyDays
}
