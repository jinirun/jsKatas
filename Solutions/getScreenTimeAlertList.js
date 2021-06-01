function getScreenTimeAlertList(userArray, date){

  if (userArray === undefined){
    throw new Error("Error: Input cannot be empty");
  }

  if(date === undefined){
    throw new Error("Error: Input cannot be empty");
  }
  return [];
}

module.exports = {
  getScreenTimeAlertList
}
