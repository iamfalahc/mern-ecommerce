import React from 'react'
import {Route, Routes} from "react-router-dom" 
import UserHome from "../Pages/User/UserHome/UserHome"
import ProductDetail from "../Pages/User/ProductDetails/ProductDetail"
import Category from "../Pages/User/Category/Category"
import AdminHome from '../Pages/Admin/Home/AdminHome'
import CreatePage from '../Pages/Admin/CreateProduct/CreatePage'
import EditProduct from '../Pages/Admin/EditProduct/EditProduct'

function PrivateRoute() {
  return (
    <div>
         <Routes>
      <Route path="/" Component={UserHome}/>
      <Route path="/product-detail" Component={ProductDetail}/>
      <Route path="/category/:id" Component={Category}/>
      <Route path="/admin-home" Component={AdminHome}/>
      <Route path="/admin-create-page" Component={CreatePage}/>
      <Route path="/admin-edit-page" Component={EditProduct}/>
      <Route path="*" Component={UserHome}/>
    </Routes>
    </div>
  )
}

export default PrivateRoute
