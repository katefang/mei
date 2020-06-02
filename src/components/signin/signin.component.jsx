import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../Custom-Button/Custom-Button.component";

const SignIn = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = e => {
    e.preventDefault();
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setState({
      [name]: value,
    });
  };
  const { email, password } = state;
  return (
    <div className="sign-in">
      <h2>Returning Customer</h2>
      <span>Enter your email and password below to sign in</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton type="button">SIGN IN WITH GOOGLE</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
