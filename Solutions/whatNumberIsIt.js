//function to check Number object
function whatNumberIsIt(n){

  if(isNaN(n)){
    return "Input number is Number.NaN";
  }

  switch(n){
    case Number.MAX_VALUE: return "Input number is Number.MAX_VALUE";
    case Number.MIN_VALUE: return "Input number is Number.MIN_VALUE";
    case Number.POSITIVE_INFINITY: return "Input number is Number.POSITIVE_INFINITY";
    case Number.NEGATIVE_INFINITY: return "Input number is Number.NEGATIVE_INFINITY";
  }
  return "Input number is " + n;
}

module.exports = {
  whatNumberIsIt
}
