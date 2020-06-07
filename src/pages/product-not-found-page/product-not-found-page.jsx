import React from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  wrapper: {
    margin: theme.spacing(10),
    textAlign: "center",
    padding: theme.spacing(1),
  },
  list: {
    listStylePosition: "inside",
    margin: theme.spacing(2),
    fontSize: "18px",
  },
}));

const ProductNotFoundPage = () => {
  const { keyword } = useParams();
  const { wrapper, list } = useStyles();
  return (
    <div className={wrapper}>
      <Typography variant="h3" textSecondary>
        SORRY!
      </Typography>
      <Typography variant="h6">
        We couldn't find any search results for "{keyword}"
      </Typography>
      <ul className={list}>
        <li>Check for typos or misspellings</li>
        <li>Search for brands, concerns, or products</li>
      </ul>
    </div>
  );
};

export default ProductNotFoundPage;
