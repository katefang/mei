import React from "react";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: theme.spacing(6),
  },

  divider: {
    opacity: "0.4",
  },
  wrapper: {
    margin: "auto",
  },
}));
const SignInSignUp = () => {
  const { wrapper, title, divider } = useStyles();
  return (
    <div className={wrapper}>
      <Typography className={title} variant="h5">
        SIGN IN / SIGN UP
        <hr className={divider} />
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <SignIn />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SignUp />
        </Grid>
      </Grid>
    </div>
  );
};

export default SignInSignUp;
