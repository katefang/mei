import React from "react";
import { Grid } from "@material-ui/core/";
import ProductCard from "../product-card/product-card.component";

const ProductCategory = ({ products }) => {
  return (
    <div>
      <Grid container spacing={8}>
        {products &&
          products.map(({ id, ...otherProps }) => (
            <ProductCard key={id} id={id} {...otherProps} />
          ))}
      </Grid>
    </div>
  );
};

export default ProductCategory;
