//function to turn mars rover left or right

function turn(current, target){
  let direction = 'left';
  if(current === '' || target === ''){
    return "Input cannot be empty";
  }

  switch(current + target){
    case 'NE':
    case 'ES':
    case 'SW':
    case 'WN': direction = 'right'; break;
  }

  return direction;

}

module.exports = {
  turn
}
