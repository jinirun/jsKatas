//function to accept 2 integers and return the number of squares possible
function findSquares(x, y){
  let totalSquares = 0;
  let i = 1;

  if(x <= 0 || y <= 0){
    return "Input should be greater than zero";
  }
  if(x < y){
    return "First input should be greater than the second input";
  }else {
    //return total number of 1*1 squares for the given input
    while(i < x){
      
      i++;
    }
    return x*y;
  }


  //return 0;
}

module.exports = {
  findSquares
}
