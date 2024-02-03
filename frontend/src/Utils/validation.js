function userNameValidation(name) {
    if(name.trim().length<3){
        alert("User name mus contain 3 characters")
       }  
}
function userPasswordValidation(password) {
    const numberRegex = /\d/

    if (password.trim().length<8) {
        alert("8 char needed")
      } else if(!numberRegex.test(password)){
        alert("Password should contain numbers")
      }   
}
export {userNameValidation,userPasswordValidation}
