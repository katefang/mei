import React from "react";
import { Link } from "@material-ui/core";
import { LinkedIn, GitHub } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  footer: {
    textAlign: "center",
    position: "static",
    bottom: "0",
    display: "flex",
    flexFlow: "column",
    flexDirection: "flex-end",
  },
  copyright: {
    marginTop: theme.spacing(1),
  },
}));

const Footer = () => {
  const year = new Date().getFullYear();
  const { footer, copyright } = useStyles();
  return (
    <footer className={footer}>
      <div>
        <Link target="_blank" href="https://www.linkedin.com/in/katefang33/">
          <LinkedIn />
        </Link>
        <Link target="_blank" href="https://github.com/katefang">
          <GitHub />
        </Link>
        <br />
        <p className={copyright}>© The Good Beauty {year}</p>
      </div>
    </footer>
  );
};

export default Footer;
