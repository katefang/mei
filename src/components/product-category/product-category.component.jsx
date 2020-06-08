import React, { useState, useContext } from "react";
import { Grid } from "@material-ui/core/";
import ProductCard from "../product-card/product-card.component";
import SideBar from "../sidebar/sidebar.component";
import { makeStyles } from "@material-ui/styles";
import { ProductsContext } from "../../context/products-context";

const useStyles = makeStyles(theme => ({
  outerContainer: {
    flexFlow: "row nowrap",
  },
  sidebar: {
    marginTop: theme.spacing(8),
  },
}));

const ProductCategory = () => {
  const { filtered } = useContext(ProductsContext);

  const { outerContainer, sidebar } = useStyles();
  return (
    <div>
      <Grid container spacing={2} className={outerContainer}>
        <Grid className={sidebar} item>
          <SideBar />
        </Grid>
        <Grid container item spacing={8} style={{ marginTop: "20px" }}>
          {filtered &&
            filtered.map(({ id, ...otherProps }) => (
              <ProductCard key={id} id={id} {...otherProps} />
            ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductCategory;
