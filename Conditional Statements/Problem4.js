//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let credential_username = "sanjay";
let credential_password = "2023";

let username = "sanjay";
let password = 2023;

if(credential_username==username){
  if(credential_password==password){
    console.log("You are log in now");
  }else{
    console.log("your password is wrong");
  }
}else{
  console.log("your username is wrong");
}

