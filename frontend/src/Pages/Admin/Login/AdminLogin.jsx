import React from "react";
import FormCard from "../../../Components/FormCard/FormCard";
import Login from "../../User/Login/Login";
import Input from "../../../Components/InputField/Input";
import Button from "../../../Components/Button/Button";
import { Link } from "react-router-dom";

function AdminLogin() {
  return (
    <div>
      <FormCard title={"Log in"} type={"Admin Login"}>
        <Input  
         label="User Name"
         placeholder="User Name"
         type="text"/>
        <Input
         label="User Name"
         placeholder="User Name"
         type="text" />
        <Link to={"/admin-home"}> <Button
         Button buttonName="Login" variant={"primary"} /></Link>
      </FormCard>
    </div>
  );
}

export default AdminLogin;
