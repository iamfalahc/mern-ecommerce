import React, { useEffect, useState } from "react";
import FormCard from "../../../Components/FormCard/FormCard";
import Login from "../../User/Login/Login";
import Input from "../../../Components/InputField/Input";
import Button from "../../../Components/Button/Button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  userPasswordValidation,
} from "../../../Utils/validation.js";
import { adminLogIn, userLogIn } from "../../../Services/userApi";

function AdminLogin() {
  const [input, setInput] = useState({
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
      return { ...preValue, password: userPasswordValidation(input.password) };
    });    
  };
  const postAdminLogin = async () => {
    try {
      const response = await adminLogIn(input)
      console.log(response)
      if(response.status === 200) {
        navigate("/admin-home");
        localStorage.setItem('isAuthenticatedAdmin', true);
        window.location.reload()
      }

    } catch (error) {
      console.log('error', error)
    }
  }
  useEffect(() => {
    console.log(errors);
    if ( errors.password !== "") return
    postAdminLogin()
  }, [errors.password]);
  return (
    <div>
      <FormCard title={"Admin Log in"} type={"Admin Login"} handleSubmit={onLogin}>
        <Input label="Email" placeholder="Email" type="email" name="email" id="adminEmail" isRequired={true} setValue={setInput} />
        <Input label="Password" placeholder="Password" type="password" name="password" id="adminPassword" isRequired={true}  setValue={setInput}/>
      
        <Button buttonName="Login" variant={"primary"} />
       
      </FormCard>
    </div>
  );
}

export default AdminLogin;
