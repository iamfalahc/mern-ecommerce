import { BrowserRouter } from "react-router-dom";
import Login from "./Pages/User/Login/Login";
import SignUp from "./Pages/User/SignUp/SignUp";
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";
import AdminRoute from "./Routes/AdminRoute";

function App() {
  const isAuthenticated = localStorage.getItem('isAuthenticated')==="true" ? true : false;
  const isAuthenticatedAdmin = localStorage.getItem('isAuthenticatedAdmin')==="true" ? true : false;

  return (
    <BrowserRouter>
      {isAuthenticated ? <PrivateRoute /> : (isAuthenticatedAdmin ? <AdminRoute /> : <PublicRoute /> ) }
      {/* <Login />
   <SignUp /> */}
      {/* <PrivateRoute />
      <PublicRoute /> */}
    </BrowserRouter>
  );
}

export default App;
