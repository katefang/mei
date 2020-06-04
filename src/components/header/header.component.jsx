import React from "react";
import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  appBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  p: {
    display: "inline",
  },
  link: {
    display: "inline",
  },
}));

const Header = () => {
  const { appBar, link, p } = useStyles();
  return (
    <div component="header">
      <AppBar position="static" className={appBar}>
        <p className={p}>
          Complimentary 2 day shipping within the U.S. with orders over $50.
        </p>
        <Link className={link} to="/signin">
          Login/Register
        </Link>
      </AppBar>
    </div>
  );
};

export default Header;
