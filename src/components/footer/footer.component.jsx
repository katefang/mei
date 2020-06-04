import React from "react";
import { Container, Link } from "@material-ui/core";
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
        <p>Follow me on</p>
        <Link href="https://www.linkedin.com/in/katefang33/">
          <LinkedIn />
        </Link>
        <Link href="https://github.com/katefang">
          <GitHub />
        </Link>
        <br />
        <p>Copyright © The Good Beauty {year}</p>
      </Container>
    </footer>
  );
};

export default Footer;
