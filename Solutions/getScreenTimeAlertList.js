function getScreenTimeAlertList(userArray, date){
  let userList = [];
  let userScreenTime = 0;
  let screenTime = [];

  if (userArray === undefined){
    throw new Error("Error: Input cannot be empty");
  }

  if(date === undefined){
    throw new Error("Error: Input cannot be empty");
  }

  for(let i=0; i<userArray.length; i++){
    for(let j = 0; j<userArray[i].screenTime.length; j++){
      screenTime = Object.values(userArray[i].screenTime[j].usage);
      if(userArray[i].screenTime[j].date === date){

        for(let k=0; k<screenTime.length; k++){
          userScreenTime += screenTime[k];
        }
        if (userScreenTime > 100){
          userList.push(userArray[i].username);
        }
      }
    }
  }
  return userList;
}

module.exports = {
  getScreenTimeAlertList
}
