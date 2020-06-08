import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: "10vw",
    border: "5px solid #160f30",
    margin: theme.spacing(1),
    textAlign: "center",
    height: "10vh",
    "&:hover": {
      backgroundColor: "#160f30",
      color: "white",
    },
  },
  title: {
    paddingTop: theme.spacing(2),
  },
}));

const CategoryNameContainer = ({ children, name }) => {
  const { wrapper, title } = useStyles();
  const history = useHistory();

  const handleClick = e => {
    history.push(`/category/${e.target.id}`);
  };
  return (
    <Grid
      className={wrapper}
      id={name}
      onClick={handleClick}
      item
      xs={6}
      sm={3}
      md={2}
    >
      <Typography variant="h5" className={title}>
        {children.toUpperCase()}
      </Typography>
    </Grid>
  );
};

export default CategoryNameContainer;
