import React from "react";
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
  BottomNavigation,
  Grid,
  CssBaseline,
  Container,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: "center",
  },
  img: {
    width: "40%",
    borderRadius: "5px",
  },
}));

const PhotosContainer = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <img
        className={classes.img}
        src="https://images.unsplash.com/photo-1487412912498-0447578fcca8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
        alt="makeup"
      />
    </Grid>
  );
};

export default PhotosContainer;
