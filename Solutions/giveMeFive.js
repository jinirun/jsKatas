function giveMeFive(obj){
  let five = [];
  if(Object.keys(obj).length === 0){
    return "Input cannot be empty";
  }
  for(let key in obj){
    let val = obj[key];
    if(key.length === 5){
      five.push(key);
    }
    if(val.length === 5){
      five.push(val);
    }
  }
  return five;
}

module.exports = {
  giveMeFive
}
