import React from "react";
import "./Login.css";
import Input from "../../../Components/InputField/Input";
import Button from "../../../Components/Button/Button";

function Login() {
  return (
    <div className="page">
      <div className="login-container">
        <h1>Login</h1>

        <form action="">
          <Input
            label="User Name"
            placeholder="User Name"
            type="text"
            id="loginUserName"
          />{" "}
          <Input
            label="Password"
            placeholder="Password"
            type="password"
            id="loginPassword"
          />
          <Button 
          buttonName="Login"
          variant={"primary"}
          />
        </form>
        <span>Don't have an account?<a href="">Sign Up</a></span>
      </div>
    </div>
  );
}

export default Login;
