import "./FormCard.css";
import { Link } from "react-router-dom";

function FormCard({ children, title, type, handleSubmit }) {
  // Define a variable to store the JSX content based on the type
  let additionalContent = null;

  // Conditionally set the additional content based on the type
  if (type === "Sign Up") {
    additionalContent = (
      <span>
        Already have an Account<Link to="/login">Login</Link>
      </span>
    );
  } else if (type === "Log In") {
    additionalContent = (
      <span>
        Don't have an Account?<Link to="/signup">Sign Up</Link>
      </span>
    );
  }

  return (
    <div className="login-container">
      <h1>{title}</h1>
      <form action="" onSubmit={handleSubmit}>
        {children}
      </form>
      {additionalContent}
    </div>
  );
}

export default FormCard;
