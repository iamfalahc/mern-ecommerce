function userNameValidation(name) {
  if (name.trim().length < 3) return "User name must contain 3 characters";
  return "";
}
function userPasswordValidation(password) {
  const numberRegex = /\d/;
  const specialCharacterRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  if (password.trim().length < 8) {
    return "Password should contain 8 characters";
  } else if (!numberRegex.test(password)) {
    return "Password should contain numbers";
  }
  else if(!specialCharacterRegex.test(password)){
    return "Password should contain special characters";

  }
  return "";
}
function userNameSignUpValidation(userName) {
  console.log(userName)
  if (userName.trim().length < 3) return "User name must contain 3 characters";
  return "";
}
function userSignUpPasswordValidation(password) {
  const numberRegex = /\d/;
  const specialCharacterRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  if (password.trim().length < 8) {
    return "Password should contain 8 characters";
  } else if (!numberRegex.test(password)) {
    return "Password should contain numbers";
  }
  else if(!specialCharacterRegex.test(password)){
    return "Password should contain special characters";

  }
  
  return "";
}
function userPasswordMatching(password,cPassword){
if(password!==cPassword){
return"Password do not match"
}
return""
}

export { userNameValidation, userPasswordValidation,userNameSignUpValidation,userSignUpPasswordValidation,userPasswordMatching};
