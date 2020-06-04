import React from "react";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  title: {
    width: "80%",
    margin: "0 auto",
    marginTop: theme.spacing(6),
  },
  div: {
    width: "80%",
    display: "flex",
    justifyContent: "space-between",
    margin: "0 auto",
  },
  divider: {
    opacity: "0.3",
  },
}));
const SignInSignUp = () => {
  const { div, title, divider } = useStyles();
  return (
    <>
      <Typography className={title} variant="h5">
        SIGN IN / SIGN UP
        <hr className={divider} />
      </Typography>
      <div className={div}>
        <SignIn />
        <hr className={divider} />
        <SignUp />
      </div>
    </>
  );
};

export default SignInSignUp;
