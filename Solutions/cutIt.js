//a function to accept an array and return the shortest length of the array elements
function cutIt(arr){
  let len = 0;
  let newArray = [];

  if(arr.length === 0){
    return "Input cannot be empty";
  }
  //find the length of smallest element
  len = arr[0].length;
  for(let i of arr){
    if(i.length < len){
      len = i.length;
    }
  }

  for(let j of arr){
    newArray.push(j.substr(0, len));
  }
  return newArray;
}

module.exports = {
  cutIt
}
