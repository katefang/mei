import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  appBar: {
    display: "flex",
  },
  toolBar: {
    width: "80%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    flexFlow: "row wrap",
  },
  p: {
    display: "inline",
    color: "white",
  },
  link: {
    display: "inline",
    textDecoration: "none",
    color: "white",
    fontStyle: "italic",
  },
}));

const Header = () => {
  const { appBar, link, p, toolBar } = useStyles();
  return (
    <AppBar style={{ position: "static" }} className={appBar}>
      <Toolbar className={toolBar}>
        <p className={p}>
          Complimentary 2 day shipping within the U.S. with orders over $50.
        </p>
        <Link className={link} to="/signin">
          Login/Register
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
