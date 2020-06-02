import React from "react";
import { Typography, Box, InputBase } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  subheader: {
    height: "3rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const SubHeader = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.subheader}>
      <Typography variant="h4" className={classes.title}>
        THE GOOD BEAUTY
      </Typography>
      <div className={classes.search}>
        <InputBase
          placeholder="Search..."
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
        />
        <p>
          0 items in <ShoppingCart />
        </p>
      </div>
    </Box>
  );
};

export default SubHeader;
