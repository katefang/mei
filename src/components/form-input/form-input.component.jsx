import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  input: {
    width: "320px",
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));
const FormInput = ({ label, handleChange, ...otherProps }) => {
  const { input } = useStyles();
  return (
    <>
      <TextField
        label={label}
        className={input}
        onChange={handleChange}
        {...otherProps}
        variant="outlined"
      />
    </>
  );
};

export default FormInput;
