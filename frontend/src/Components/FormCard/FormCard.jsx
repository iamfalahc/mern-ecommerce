import React from "react";
import "./FormCard.css";
import { Link } from "react-router-dom";

function FormCard({children, title, type,handleSubmit }) {


  return (
    <div className="login-container">
    <h1>{title}</h1>

      <form action="" onSubmit={handleSubmit}>
        {children}
      </form>
      
        {(type==="Sign Up"?( <span>Already have an Account<Link to="/login">Login</Link></span>) :( <span>Don't have an Account?<Link to="/signup">Sign Up</Link></span>))

        }
      
    </div>
  );
}

export default FormCard;
