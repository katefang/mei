import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../Custom-Button/Custom-Button.component";

const SignUp = () => {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = e => {
    e.preventDefault();
    const { password, confirmPassword } = state;
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setState({ [name]: value });
  };
  const { email, password, confirmPassword } = state;
  return (
    <div className="sign-up">
      <h2 className="title">Create an Account</h2>
      <span>Sign up to use convenient features and quick checkout.</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="confirmPassword"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
