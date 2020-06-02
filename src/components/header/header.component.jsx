import React from "react";
import useStyles from "./header.styles";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemIcon,
  listItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ThemeProvider,
  Button,
  Container,
  Grid,
} from "@material-ui/core";
import { Apps, ContactMail } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Header = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.header} component="header">
      <AppBar position="static" className={classes.appBar}>
        <p className={classes.p}>
          Complimentary 2 day shipping within the U.S. with orders over $50.
        </p>
        <Link to="/signin">
          <Button color="inherit" className={classes.button}>
            Login/Register
          </Button>
        </Link>
      </AppBar>
    </Grid>
  );
};

export default Header;
