function userNameValidation(name) {
    if(name.trim().length<3)return("User name must contain 3 characters")
    return""
}
function userPasswordValidation(password) {
    const numberRegex = /\d/

    if (password.trim().length<8) {
        return("Password should contain 8 characters")
      } else if(!numberRegex.test(password)){
        return("Password should contain numbers")
      }  
      return "" 
}
export {userNameValidation,userPasswordValidation}
