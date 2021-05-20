//function to return a string array after splitting and merging
function splitAndMerge(sentence, separator){
  let splitSentence;
  let str = "";

  splitSentence = sentence.split(" ");

  for(let i in splitSentence){
    str += " " + splitSentence[i].split("").join(separator);
  }
  return str.trim();
}

module.exports = {
  splitAndMerge
}
