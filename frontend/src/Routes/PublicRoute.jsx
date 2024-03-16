import { Route, Routes } from "react-router-dom";
import React from "react";
import Login from "../Pages/User/Login/Login";
import SignUp from "../Pages/User/SignUp/SignUp";

import AdminLogin from "../Pages/Admin/Login/AdminLogin";

function PublicRoute() {
  return (
    <Routes>
      <Route path="/login" Component={Login} />
      <Route path="/signup" Component={SignUp} />
      <Route path="/admin-login" Component={AdminLogin} />
      <Route path="*" Component={Login} />
    </Routes>
  );
}

export default PublicRoute;
