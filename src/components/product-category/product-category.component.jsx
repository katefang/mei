import React, { useState } from "react";
import { Grid } from "@material-ui/core/";
import ProductCard from "../product-card/product-card.component";
import SideBar from "../sidebar/sidebar.component";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  outerContainer: {
    flexFlow: "row nowrap",
  },
  sidebar: {
    marginTop: theme.spacing(8),
  },
}));

const ProductCategory = ({ products }) => {
  const [data, setData] = useState(null);
  const { outerContainer, sidebar } = useStyles();
  return (
    <div>
      <Grid container spacing={2} className={outerContainer}>
        <Grid className={sidebar} item>
          <SideBar products={products} setData={setData} />
        </Grid>
        <Grid container item spacing={8} style={{ marginTop: "20px" }}>
          {!data &&
            products &&
            products.map(({ id, ...otherProps }) => (
              <ProductCard key={id} id={id} {...otherProps} />
            ))}
          {data &&
            data.map(({ id, ...otherProps }) => (
              <ProductCard key={id} id={id} {...otherProps} />
            ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductCategory;
