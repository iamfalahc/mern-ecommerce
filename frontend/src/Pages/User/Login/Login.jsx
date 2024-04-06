import React, { useEffect, useState } from "react";
import Input from "../../../Components/InputField/Input";
import Button from "../../../Components/Button/Button";
import FormCard from "../../../Components/FormCard/FormCard";
import { useNavigate } from "react-router-dom";
import { userLogIn } from "../../../Services/userApi.js";

import { userPasswordValidation } from "../../../Utils/validation.js";

function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    password: undefined, // Initially no password error
  });
  
  const navigate = useNavigate(); // Navigate hook for redirection

  // Function to handle login form submission
  const onLogin = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Validate password input
    setErrors((preValue) => ({
      ...preValue,
      password: userPasswordValidation(inputs.password), // Validate password
    }));
  };

  // Function to perform user login after validation
  const postUserLogin = async () => {
    try {
      const response = await userLogIn(inputs); // Send login request
      console.log(response);
      if (response.status === 200) {
        // If login successful, set user authentication status and reload page
        localStorage.setItem("isAuthenticated", true);
        window.location.reload(); // Reload page to update authentication status
        navigate("/"); // Redirect to home page
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  // Effect to trigger user login after password validation
  useEffect(() => {
    if (errors.password !== "") return; // If password validation fails, do not proceed with login
    postUserLogin(); // Otherwise, perform user login
  }, [errors.password]); // Trigger effect when password validation changes

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
        />
        <Input
          label="Password"
          placeholder="Password"
          type="password"
          id="loginPassword"
          isRequired={true}
          minLength={8}
          name="password"
          setValue={setInputs}
          errorMessage={errors.password} // Pass password error message
        />
        <Button buttonName="Login" variant={"primary"} />
      </FormCard>
    </div>
  );
}

export default Login;
