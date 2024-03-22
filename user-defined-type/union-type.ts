// union data type
let userID: string | number | boolean;

userID = "shahriar shakil";
userID = 78876543214;
userID = false;

// union function
function displayUserInfo(userID: string | number | boolean) {
  console.log(userID);
}

// parameter values
displayUserInfo("shshriar sharif");
displayUserInfo(987654);
displayUserInfo(true);
