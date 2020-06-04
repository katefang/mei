import React from "react";
import { Grid } from "@material-ui/core/";
import ProductCard from "../product-card/product-card.component";

const ProductCategory = ({ products }) => {
  return (
    <div>
      <Grid container spacing={3} style={{ width: "80%", margin: "0 auto" }}>
        {products &&
          products.map(({ id, ...otherProps }) => (
            <ProductCard key={id} {...otherProps} />
          ))}
      </Grid>
    </div>
  );
};

export default ProductCategory;
