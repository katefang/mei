import React from "react";
import { Link } from "react-router-dom";
import { ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  thing: {
    textDecoration: "none",
    color: "#212121",
  },
}));

const MenuLinks = ({ link, text }) => {
  const { thing } = useStyles();
  return (
    <Link className={thing} to={link}>
      <ListItem>
        <ListItemText primary={text} />
      </ListItem>
    </Link>
  );
};

export default MenuLinks;
