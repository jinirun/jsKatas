function pickIt(arr){
  let odd = [], even = [];
  if(arr.length === 0){
    return "Array is empty";
  }

  for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 === 0){
      even.push(arr[i]);
    } //even number
    else{
      odd.push(arr[i]);
    }//odd number
  }

  return [odd, even];
}

module.exports = {
  pickIt
}
