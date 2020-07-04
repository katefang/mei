import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  categoryContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: theme.spacing(5)
  },
  title: {
    textAlign: 'center',
    fontStyle: 'italic'
  },
  divider: {
    opacity: '0.4'
  }
}));

const ShopByHeading = ({ children }) => {
  const { categoryContainer, title, divider } = useStyles();
  return (
    <Grid container spacing={2} className={categoryContainer}>
      <Grid item xs={4}>
        <hr className={divider} />
      </Grid>
      <Grid item xs={4}>
        <Typography className={title} variant='h6'>
          {children}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <hr className={divider} />
      </Grid>
    </Grid>
  );
};

export default ShopByHeading;
