import {BrowserRouter} from "react-router-dom" 
import Login from "./Pages/User/Login/Login";
import SignUp from "./Pages/User/SignUp/SignUp";
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";



function App() {
  const isAuthenticated = false;

  return (
    <BrowserRouter>
    {isAuthenticated ? <PrivateRoute /> : <PublicRoute />}
   {/* <Login />
   <SignUp /> */}
    </BrowserRouter>
  );
}

export default App;
