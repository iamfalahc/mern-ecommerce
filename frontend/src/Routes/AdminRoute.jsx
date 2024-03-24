import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminHome from "../Pages/Admin/Home/AdminHome";
import CreatePage from "../Pages/Admin/CreateProduct/CreatePage";
import EditProduct from "../Pages/Admin/EditProduct/EditProduct";

function AdminRoute() {
  return (
    <div>
      <Routes>
        <Route path="/admin-home" Component={AdminHome} />
        <Route path="/admin-create-page" Component={CreatePage} />
        <Route path="/admin-edit-page/:id" Component={EditProduct} />
        <Route path="*" Component={AdminHome} />
      </Routes>
    </div>
  );
}

export default AdminRoute;
