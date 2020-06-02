import React from "react";

const FormInput = ({ label, handleChange, ...otherProps }) => {
  return (
    <>
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? <label>{label}</label> : null}
    </>
  );
};

export default FormInput;
