import React from "react";
import "./SignUp.css";
import Input from "../../../Components/InputField/Input";
import Button from "../../../Components/Button/Button";
import FormCard from "../../../Components/FormCard/FormCard";

function SignUp() {
  return (
    <div className="page">
      <FormCard title={"Sign Up"} type={"Sign Up"}>
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
           <Input
          label="Confirm Password"
          placeholder="Confirm Password"
          type="password"
          id="loginConfirmPassword"
          isRequired={true}
          minLength={8}

        />
        <Button buttonName="Sign Up" variant={"primary"} />
      </FormCard>
    </div>
  );
}

export default SignUp;
