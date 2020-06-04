import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  button: {
    width: "200px",
    marginTop: "10px",
    marginRight: "10px",
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
