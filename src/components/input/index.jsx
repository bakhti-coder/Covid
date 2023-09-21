import React from "react";
import "./Input.css";

const Input = ({ label, name, type }) => {
  return (
    <div className="input-container">
      <label className="input-label" htmlFor={name}>
        {label}:
      </label>
      <input type={type} id={name} name={name} className="input-field" />
    </div>
  );
};

export default Input;
