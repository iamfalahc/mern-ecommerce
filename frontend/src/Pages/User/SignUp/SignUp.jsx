import React, { useState } from "react";
import "./SignUp.css";
import Input from "../../../Components/InputField/Input";
import Button from "../../../Components/Button/Button";
import FormCard from "../../../Components/FormCard/FormCard";



function SignUp() {
  const [inputs,setInputs] = useState({
    userName:"",
    email:"",
    password:"",
    cPassword:""
  })

  return (
    <div className="page">
      <FormCard title={"Sign Up"} type={"Sign Up"}>
        <Input
          label="User Name"
          placeholder="User Name"
          type="text"
          id="loginUserName"
          name="userNaame"
          isRequired={true}
          value={inputs.userName}
        />{" "}
             <Input
          label="E mail"
          placeholder="E mail"
          type="email"
          name="email"
          id="email"
          isRequired={true}
          value={inputs.email}

        />
        <Input
          label="Password"
          placeholder="Password"
          type="password"
          name="password"
          id="loginPassword"
          isRequired={true}
          minLength={8}
          value={inputs.password}

        />
           <Input
          label="Confirm Password"
          placeholder="Confirm Password"
          type="password"
          name="cPassword"
          id="loginConfirmPassword"
          isRequired={true}
          minLength={8}
          value={inputs.cPassword}

        />
        <Button buttonName="Sign Up" variant={"primary"} />
      </FormCard>
    </div>
  );
}

export default SignUp;
