import React from "react";
import { Link } from "react-router-dom";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "space-around",
  },
  links: {
    textDecoration: "none",
    color: "secondary",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Link className={classes.links} path="/shop/skincare">
        SKINCARE
      </Link>
      <Link className={classes.links} path="/shop/makeup">
        MAKEUP
      </Link>
      <Link className={classes.links} path="/shop/hair">
        HAIR
      </Link>
      <Link className={classes.links} path="/shop/bath&body">
        BATH & BODY
      </Link>
      <Link className={classes.links} path="/shop/fragrance">
        FRAGRANCE
      </Link>
    </Container>
  );
};

export default NavBar;
