import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  thing: {
    color: "#212121",
    display: "flex",
    padding: theme.spacing(2),
    "&:hover": {
      fontWeight: "bold",
    },
  },
}));

const MenuLinks = ({ link, text }) => {
  const { thing } = useStyles();
  return (
    <Link style={{ textDecoration: "none" }} to={link}>
      <Typography className={thing} variant="body1">
        {text}
      </Typography>
    </Link>
  );
};

export default MenuLinks;
