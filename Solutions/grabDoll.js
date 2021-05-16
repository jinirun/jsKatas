function grabDoll(dolls){
  let bag = [];
  if(dolls.length === 0){
    return "Array is empty";
  }

  for(let i=0; i<dolls.length; i++) {
    if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
      bag.push(dolls[i]);
    }

    if (bag.length === 3) {
      break;
    }else {
      continue;
    }
  }
  return bag;
}
//it should return Hello Kitty if [Hello Kitty] is passed
//returns an array

module.exports = {
  grabDoll
}
