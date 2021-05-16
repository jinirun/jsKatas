//function to accept a string and a number
function padIt(str, n){
  let i=1;

  if(n < 0){
    return "Please enter a positive number";
  }
  if(n === 0){
    return str;
  }

  while(i <= n){
    if(i % 2 === 0){
      str = str + "*";
    }
    else{
      str = "*" + str;
    }
    i++;
  }
  return str;
}

module.exports = {
  padIt
}
