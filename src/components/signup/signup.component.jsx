import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

const SignUp = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
    confirmPassword: ''
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
  const { title } = useStyles();
  return (
    <Grid container item xs={12}>
      <Grid item xs={12}>
        <Typography variant='h6' className={title}>
          Create an Account
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='subtitle2'>
          Sign up to use convenient features and quick checkout.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='email'
          required
        />
      </Grid>
      <Grid item xs={12}>
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='password'
          required
        />
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={12}>
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            label='confirmPassword'
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <CustomButton type='button'>SIGN UP</CustomButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignUp;
