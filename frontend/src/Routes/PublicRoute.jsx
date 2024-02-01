import {Route, Routes} from "react-router-dom" 
import React from 'react'
import Login from "../Pages/User/Login/Login"
import SignUp from "../Pages/User/SignUp/SignUp"
import UserHome from "../Pages/User/UsreHome/UserHome"

function PublicRoute() {
  return (
    <Routes>
      <Route path="/login" Component={Login}/>
      <Route path="/signup" Component={SignUp}/>
      <Route path="/" Component={UserHome}/>
    </Routes>
  )
}

export default PublicRoute
