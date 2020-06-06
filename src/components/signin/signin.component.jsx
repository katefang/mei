import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../Custom-Button/Custom-Button.component";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
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
  const { title } = useStyles();
  return (
    <Grid container item sm={12}>
      <Grid item xs={12}>
        <Typography variant="h6" className={title}>
          Returning Customer
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle2">
          Enter your email and password below to sign in
        </Typography>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={12}>
          <FormInput
            name="email"
            type="email"
            value={email}
            handleChange={handleChange}
            label="email"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={handleChange}
            label="password"
            required
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <CustomButton type="button">SIGN IN</CustomButton>
        </Grid>

        <Grid item xs={12} md={7}>
          <CustomButton type="button">SIGN IN WITH GOOGLE</CustomButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignIn;
