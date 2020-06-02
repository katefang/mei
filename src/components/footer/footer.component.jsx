import React from "react";
import { Typography, Container, Link } from "@material-ui/core";
import { LinkedIn, GitHub } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  footer: {
    textAlign: "center",
    position: "relative",
    bottom: "0",
    marginTop: "auto",
  },
}));

const Footer = () => {
  const year = new Date().getFullYear();
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <p>Learn more about me below</p>
        <Link>
          <LinkedIn />
        </Link>
        <Link>
          <GitHub />
        </Link>
        <br />
        <p>Copyright © The Good Beauty {year}</p>
      </Container>
    </footer>
  );
};

export default Footer;
