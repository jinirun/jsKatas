//function to find the gap in position between firs and last occurrence of a character
function firstToLast(str, c){
  let gap = 0;
  gap = str.lastIndexOf(c) - str.indexOf(c);

  if (str.search(c) === -1){
    gap = -1;
  }
  return gap;
}

module.exports = {
  firstToLast
}
