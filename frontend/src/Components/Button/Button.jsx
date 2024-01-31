import React from "react";
import "./Button.css";

function Button({ type, variant, buttonName }) {
  return (
    <button type={type} className={`button ${variant}`}>
      {buttonName}
    </button>
  );
}

export default Button;
