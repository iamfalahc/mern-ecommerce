import React from "react";
// import "./Login.css";
import Input from "../../../Components/InputField/Input";
import Button from "../../../Components/Button/Button";
import FormCard from "../../../Components/FormCard/FormCard";

function Login() {
  return (
    <div className="page">
    
      <FormCard title={"Login"} type={"Log In"}>
        <Input
          label="User Name"
          placeholder="User Name"
          type="text"
          id="loginUserName"
          isRequired={true}
        />{" "}
        <Input
          label="Password"
          placeholder="Password"
          type="password"
          id="loginPassword"
          isRequired={true}
          minLength={8}
        />
        <Button buttonName="Login" variant={"primary"} />
      </FormCard>
     
    </div>
  );
}

export default Login;
