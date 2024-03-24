import React, { useEffect, useState } from "react";
// import "./Login.css";
import Input from "../../../Components/InputField/Input";
import Button from "../../../Components/Button/Button";
import FormCard from "../../../Components/FormCard/FormCard";
import { useNavigate } from "react-router-dom";
import {userLogIn} from"../../../Services/userApi.js"

import {
  userPasswordValidation,
} from "../../../Utils/validation.js";


function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    // email: "",
    password: undefined,
  });
  const navigate = useNavigate();

  const onLogin = (event) => {
    console.log("login");
    event.preventDefault();
    setErrors((preValue) => {
      return { ...preValue, password: userPasswordValidation(inputs.password) };
    });

    
  };
  
  const postUserLogin = async () => {
    
    try {
      const response = await userLogIn(inputs)
      console.log(response)
      if(response.status === 200) {
        localStorage.setItem('isAuthenticated', true);
        window.location.reload()
        navigate("/");
      }

    } catch (error) {
      console.log('error', error)
    }
  }
  useEffect(() => {
    console.log(errors);
    if ( errors.password !== "") return
    postUserLogin()
  }, [errors.password]);

  return (
    <div className="page">
      <FormCard title={"Login"} type={"Log In"} handleSubmit={onLogin}>
        <Input
          label="E mail"
          placeholder="E mail"
          type="text"
          id="loginUserName"
          isRequired={true}
          name="email"
          setValue={setInputs}
          // errorMessage={errors.email}
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
