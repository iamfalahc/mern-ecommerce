import React from "react";
import "./Button.css";

function Button({ type, variant, buttonName, onCreate }) {


  return (
    <button
      type={type}
      className={`button ${variant}`}
      onClick={onCreate}
    >
      {buttonName}
    </button>
  );
}

export default Button;
