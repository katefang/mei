import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../Custom-Button/Custom-Button.component";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  signIn: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    marginTop: theme.spacing(1),
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

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
  const { signIn, title, buttons } = useStyles();
  return (
    <div className={signIn}>
      <Typography variant="subtitle1" className={title}>
        Returning Customer
      </Typography>
      <Typography variant="subtitle2">
        Enter your email and password below to sign in
      </Typography>
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
        <div className={buttons}>
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton type="button">SIGN IN WITH GOOGLE</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
