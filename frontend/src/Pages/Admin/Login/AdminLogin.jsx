import React, { useEffect, useState } from "react";
import FormCard from "../../../Components/FormCard/FormCard";
import Input from "../../../Components/InputField/Input";
import Button from "../../../Components/Button/Button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { userPasswordValidation } from "../../../Utils/validation.js";
import { adminLogIn } from "../../../Services/userApi";

function AdminLogin() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    password: undefined,
  });
  const navigate = useNavigate();

  // Handle login form submission
  const onLogin = (event) => {
    event.preventDefault();
    // Validate password
    setErrors((prevErrors) => ({
      ...prevErrors,
      password: userPasswordValidation(input.password),
    }));
  };

  // Function to post admin login data
  const postAdminLogin = async () => {
    try {
      const response = await adminLogIn(input);
      console.log(response);
      if (response.status === 200) {
        // If login successful, redirect to admin home
        navigate("/admin-home");
        localStorage.setItem("isAuthenticatedAdmin", true);
        window.location.reload(); // Reload the page
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  // Effect to trigger admin login when there are no password errors
  useEffect(() => {
    if (errors.password !== "") return;
    postAdminLogin();
  }, [errors.password]);

  return (
    <div>
      <FormCard
        title={"Admin Log in"}
        type={"Admin Login"}
        handleSubmit={onLogin}
      >
        <Input
          label="Email"
          placeholder="Email"
          type="email"
          name="email"
          id="adminEmail"
          isRequired={true}
          setValue={setInput}
        />
        <Input
          label="Password"
          placeholder="Password"
          type="password"
          name="password"
          id="adminPassword"
          isRequired={true}
          setValue={setInput}
        />

        <Button buttonName="Login" variant={"primary"} />
      </FormCard>
    </div>
  );
}

export default AdminLogin;
