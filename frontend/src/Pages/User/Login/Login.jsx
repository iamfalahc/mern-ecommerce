import React, { useEffect, useState } from "react";
// import "./Login.css";
import Input from "../../../Components/InputField/Input";
import Button from "../../../Components/Button/Button";
import FormCard from "../../../Components/FormCard/FormCard";
import { useNavigate } from 'react-router-dom';

import {
  userNameValidation,
  userPasswordValidation,
} from "../../../Utils/validation.js";

function Login() {
  const [inputs, setInputs] = useState({
    fname: "",
    password: "",
  });
  const [errors,setErrors] = useState({
    fname: "",
    password: "",
  })
  const navigate = useNavigate();

  const onLogin = (event) => {
    console.log("login");
    event.preventDefault();
    setErrors((preValue)=>{
      return{...preValue,"fname":userNameValidation(inputs.fname)}
    });
    setErrors((preValue)=>{
      return{...preValue,"password":userPasswordValidation(inputs.password)}

    });
navigate('/');
    
  };
  useEffect(() => {
    console.log(errors)
  }, [errors])
  
  

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
          errorMessage={errors.fname}

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
          errorMessage={errors.password}
        />
        <Button buttonName="Login" variant={"primary"} />
      </FormCard>
    </div>
  );
}

export default Login;
