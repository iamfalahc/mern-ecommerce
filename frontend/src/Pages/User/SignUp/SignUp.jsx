import React, { useState, useEffect } from "react";
import "./SignUp.css";
import Input from "../../../Components/InputField/Input";
import Button from "../../../Components/Button/Button";
import FormCard from "../../../Components/FormCard/FormCard";
import {
  userNameSignUpValidation,
  userSignUpPasswordValidation,
  userPasswordMatching
} from "../../../Utils/validation.js";
import { useNavigate } from "react-router-dom";
import { userSignUp } from "../../../Services/userApi.js";

function SignUp() {
  // State variables to manage form inputs and errors
  const [inputs, setInputs] = useState({
    userName: "",
    email: "",
    password: "",
    cPassword: "",
  });
  const [errors, setErrors] = useState({
    userName: undefined,
    password: undefined,
    cPassword: undefined,
  });
  const navigate = useNavigate();

  // Function to handle form submission
  const onSignUP = async (event) => {
    event.preventDefault();

    // Validation for user name
    setErrors((preValue) => ({
      ...preValue,
      userName: userNameSignUpValidation(inputs.userName),
    }));

    // Validation for password
    setErrors((preValue) => ({
      ...preValue,
      password: userSignUpPasswordValidation(inputs.password),
    }));

    // Validation for confirm password
    setErrors((preValue) => ({
      ...preValue,
      cPassword: userSignUpPasswordValidation(inputs.cPassword),
    }));

    // Validation for matching password and confirm password
    setErrors((preValue) => ({
      ...preValue,
      cPassword: userPasswordMatching(inputs.password, inputs.cPassword),
    }));
  };

  // Function to handle user sign up
  const postUserSignUp = async () => {
    if (errors.password !== "") return;
    try {
      const response = await userSignUp(inputs);
      if (response.status === 201) {
        localStorage.setItem("isAuthenticated", true);
        window.location.reload();
        navigate("/");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  // Effect to post user sign up data when there are no errors
  useEffect(() => {
    if (errors.password !== "" && errors.userName !== "" && errors.cPassword !== "") return;
    postUserSignUp();
  }, [errors.password, errors.cPassword, errors.userName]);

  return (
    <div className="page">
      <FormCard title={"Sign Up"} type={"Sign Up"} handleSubmit={onSignUP}>
        {/* Input fields for user sign up */}
        <Input
          label="User Name"
          placeholder="User Name"
          type="text"
          id="loginUserName"
          name="userName"
          isRequired={true}
          value={inputs.userName}
          setValue={setInputs}
          errorMessage={errors.userName}
        />
        <Input
          label="E mail"
          placeholder="E mail"
          type="email"
          name="email"
          id="email"
          isRequired={true}
          value={inputs.email}
          setValue={setInputs}
          errorMessage={errors.email}
        />
        <Input
          label="Password"
          placeholder="Password"
          type="password"
          name="password"
          id="signUpPassword"
          isRequired={true}
          minLength={8}
          value={inputs.password}
          setValue={setInputs}
          errorMessage={errors.password}
        />
        <Input
          label="Confirm Password"
          placeholder="Confirm Password"
          type="password"
          name="cPassword"
          id="signUpConfirmPassword"
          isRequired={true}
          minLength={8}
          value={inputs.cPassword}
          setValue={setInputs}
          errorMessage={errors.cPassword}
        />
        <Button buttonName="Sign Up" variant={"primary"} />
      </FormCard>
    </div>
  );
}

export default SignUp;
