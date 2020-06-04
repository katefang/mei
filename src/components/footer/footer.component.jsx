import React from "react";
import { Link, BottomNavigation } from "@material-ui/core";
import { LinkedIn, GitHub } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  footer: {
    textAlign: "center",
    position: "static",
  },
}));

const Footer = () => {
  const year = new Date().getFullYear();
  const { footer } = useStyles();
  return (
    <BottomNavigation className={footer}>
      <div>
        <p>Hire me</p>
        <Link href="https://www.linkedin.com/in/katefang33/">
          <LinkedIn />
        </Link>
        <Link href="https://github.com/katefang">
          <GitHub />
        </Link>
        <br />
        <p>Copyright © The Good Beauty {year}</p>
      </div>
    </BottomNavigation>
  );
};

export default Footer;
