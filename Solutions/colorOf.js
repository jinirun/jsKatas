//function to convert from decimal to hexadecimal
function colorOf(r, g, b){

  if(r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255){
    return "Please enter a number between 0 and 255";
  }

  if(r.toString(16).length < 2){
    r = "0" + r.toString(16);
  }
  if(g.toString(16).length < 2){
    g = "0" + g.toString(16);
  }
  if(b.toString(16).length < 2){
    b = "0" + b.toString(16);
  }

  return "#" + r.toString(16) + g.toString(16) + b.toString(16);
}

module.exports = {
  colorOf
}
