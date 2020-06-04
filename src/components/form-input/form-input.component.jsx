import React from "react";
import { OutlinedInput } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  input: {
    width: "300px",
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));
const FormInput = ({ label, handleChange, ...otherProps }) => {
  const { input } = useStyles();
  return (
    <>
      <OutlinedInput
        className={input}
        onChange={handleChange}
        {...otherProps}
      />
      {label ? <label>{label}</label> : null}
    </>
  );
};

export default FormInput;
