import React, { useEffect, useState } from "react";
// import "./Login.css";
import Input from "../../../Components/InputField/Input";
import Button from "../../../Components/Button/Button";
import FormCard from "../../../Components/FormCard/FormCard";
import { userNameValidation,userPasswordValidation} from "../../../Utils/validation.js";

function Login() {
  const [inputs, setInputs] = useState({
    fname: "",
    password: ""
  });
  const onLogin = (event) => {
    // const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    console.log("login");
    event.preventDefault();
    userNameValidation(inputs.fname)
    userPasswordValidation(inputs.password)
  };
  useEffect(() => {
    console.log(inputs)
  
   
  }, [inputs.fname])
  
  return (
    <div className="page">
      <FormCard title={"Login"} type={"Log In"} handleSubmit={onLogin}>
        <Input
          label="User Name"
          placeholder="User Name"
          type="text"
          id="loginUserName"
          isRequired={true}
          name="fname"
          setValue={setInputs}
        />{" "}
        <Input
          label="Password"
          placeholder="Password"
          type="password"
          id="loginPassword"
          isRequired={true}
          minLength={8}
          name="password"
          setValue={setInputs}
        />
        <Button buttonName="Login" variant={"primary"} />
      </FormCard>
    </div>
  );
}

export default Login;
