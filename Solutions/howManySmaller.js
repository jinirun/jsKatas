//function to return the number of decimals smaller than the input decimal
function howManySmaller(arr,n){
  let decimalCount = 0;
  for(let i of arr){
    if(i.toFixed(2) < n){
      decimalCount++;
    }
  }
  return decimalCount;
}

module.exports = {
  howManySmaller
}

