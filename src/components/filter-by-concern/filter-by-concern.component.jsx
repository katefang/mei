import React, { useState, useEffect, useContext } from 'react';
import { ProductsContext } from '../../context/products-context';
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography
} from '@material-ui/core';

const FilterByConcern = () => {
  const { products, setFiltered } = useContext(ProductsContext);

  const [filters, setFilters] = useState([]);

  const [state, setState] = useState({
    Canadian: false,
    CertClean: false,
    'Chemical Free': false,
    'Dairy Free': false,
    'EWG Verified': false,
    EcoCert: false,
    'Fair Trade': false,
    'Gluten Free': false,
    Hypoallergenic: false,
    Natural: false,
    NoTalc: false,
    'Non-GMO': false,
    Organic: false,
    'Peanut Free Product': false,
    'Sugar Free': false,
    'USDA Organic': false,
    Vegan: false,
    'alcohol free': false,
    'cruelty free': false,
    'oil free': false,
    purpicks: false,
    'silicone free': false,
    'water free': false
  });

  useEffect(() => {
    if (products) {
      if (filters.length) {
        let next = [];
        products.forEach(item => {
          if (
            filters.reduce(
              (acc, curr) => acc && item.tag_list.includes(curr),
              true
            )
          ) {
            next.push(item);
          }
        });
        setFiltered(next);
      } else {
        setFiltered(products);
      }
    }
  }, [filters]);

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.checked });
    if (filters.includes(e.target.name)) {
      setFilters(filters.filter(item => item !== e.target.name));
    } else {
      setFilters([...filters, e.target.name]);
    }
  };

  return (
    <>
      <Typography variant='body2'>CONCERN</Typography>
      <hr />
      <FormGroup column='true'>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.Canadian}
              onChange={handleChange}
              name='Canadian'
            />
          }
          label='Canadian'
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state.CertClean}
              onChange={handleChange}
              name='CertClean'
            />
          }
          label='Certified Clean'
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state['Chemical Free']}
              onChange={handleChange}
              name='Chemical Free'
            />
          }
          label='Chemical Free'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state['Dairy Free']}
              onChange={handleChange}
              name='Dairy Free'
            />
          }
          label='Dairy Free'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state['EWG Verified']}
              onChange={handleChange}
              name='EWG Verified'
            />
          }
          label='EWG Verified'
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state['EcoCert']}
              onChange={handleChange}
              name='EcoCert'
            />
          }
          label='Eco Certified'
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state['FairTrade']}
              onChange={handleChange}
              name='Fair Trade'
            />
          }
          label='Fair Trade'
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state['GlutenFree']}
              onChange={handleChange}
              name='Gluten Free'
            />
          }
          label='Gluten Free'
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state.Hypoallergenic}
              onChange={handleChange}
              name='Hypoallergenic'
            />
          }
          label='Hypoallergenic'
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state.Natural}
              onChange={handleChange}
              name='Natural'
            />
          }
          label='Natural'
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state['No Talc']}
              onChange={handleChange}
              name='No Talc'
            />
          }
          label='No Talc'
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state['Non-GMO']}
              onChange={handleChange}
              name='Non-GMO'
            />
          }
          label='Non GMO'
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state.Organic}
              onChange={handleChange}
              name='Organic'
            />
          }
          label='Organic'
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state['Peanut Free Product']}
              onChange={handleChange}
              name='PeanutFreeProduct'
            />
          }
          label='Peanut Free Product'
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state['Sugar Free']}
              onChange={handleChange}
              name='Sugar Free'
            />
          }
          label='Sugar Free'
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state['USDA Organic']}
              onChange={handleChange}
              name='USDA Organic'
            />
          }
          label='USDA Organic'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.Vegan}
              onChange={handleChange}
              name='Vegan'
            />
          }
          label='Vegan'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state['alcohol free']}
              onChange={handleChange}
              name='alcohol free'
            />
          }
          label='alcohol free'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state['cruelty free']}
              onChange={handleChange}
              name='cruelty free'
            />
          }
          label='cruelty free'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state['oil free']}
              onChange={handleChange}
              name='oil free'
            />
          }
          label='oil free'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.purpicks}
              onChange={handleChange}
              name='purpicks'
            />
          }
          label='purpicks'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state['silicone free']}
              onChange={handleChange}
              name='silicone free'
            />
          }
          label='silicone free'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state['water free']}
              onChange={handleChange}
              name='water free'
            />
          }
          label='water free'
        />
      </FormGroup>
    </>
  );
};

export default FilterByConcern;
