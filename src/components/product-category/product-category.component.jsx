import React from "react";
import { Grid } from "@material-ui/core/";
import ProductCard from "../product-card/product-card.component";
import SideBar from "../sidebar/sidebar.component";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  outerContainer: {
    flexFlow: "row nowrap",
  },
}));

const ProductCategory = ({ products }) => {
  const { outerContainer } = useStyles();
  return (
    <div>
      <Grid container spacing={2} className={outerContainer}>
        <Grid item>
          <SideBar products={products} />
        </Grid>
        <Grid container item spacing={8} style={{ marginTop: "20px" }}>
          {products &&
            products.map(({ id, ...otherProps }) => (
              <ProductCard key={id} id={id} {...otherProps} />
            ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductCategory;
