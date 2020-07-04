import React, { useEffect, useContext, useState } from 'react';
import { Grid } from '@material-ui/core/';
import ProductCard from '../product-card/product-card.component';
import SideBar from '../sidebar/sidebar.component';
import { makeStyles } from '@material-ui/styles';
import { ProductsContext } from '../../context/products-context';

const useStyles = makeStyles(theme => ({
  outerContainer: {
    flexFlow: 'row nowrap'
  },
  sidebar: {
    marginTop: theme.spacing(8)
  }
}));

const ProductCategory = () => {
  const { filtered } = useContext(ProductsContext);
  const [side, setSide] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setSide(false);
    }
  }, []);

  let aside;
  if (side) {
    aside = <SideBar />;
  }
  const { outerContainer, sidebar } = useStyles();
  return (
    <div>
      <Grid container spacing={2} className={outerContainer}>
        <Grid className={sidebar} item>
          {aside}
        </Grid>
        <Grid container item spacing={8} style={{ marginTop: '20px' }}>
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
