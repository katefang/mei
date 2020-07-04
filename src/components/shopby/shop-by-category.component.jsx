import React from 'react';
import { Grid } from '@material-ui/core';
import CategoryNameContainer from './category-name-container.component';
import CategoryName from '../category-list/category-names';

const ShopByCategory = () => {
  return (
    <Grid container spacing={1} style={{ justifyContent: 'space-around' }}>
      <CategoryNameContainer name={CategoryName[0]}>
        {CategoryName[0]}
      </CategoryNameContainer>
      <CategoryNameContainer name={CategoryName[2]}>
        {CategoryName[2]}
      </CategoryNameContainer>
      <CategoryNameContainer name={CategoryName[3]}>
        {CategoryName[3]}
      </CategoryNameContainer>
      <CategoryNameContainer name={CategoryName[4]}>
        {CategoryName[4]}
      </CategoryNameContainer>
      <CategoryNameContainer name={CategoryName[5]}>
        {CategoryName[5]}
      </CategoryNameContainer>
    </Grid>
  );
};

export default ShopByCategory;
