import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  button: {
    width: "80%",
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));

const CustomButton = ({ children, ...otherProps }) => {
  const { button } = useStyles();
  return (
    <Button
      className={button}
      variant="contained"
      color="primary"
      {...otherProps}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
