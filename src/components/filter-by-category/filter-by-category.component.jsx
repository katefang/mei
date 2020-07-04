import React, { useState, useEffect, useContext } from 'react';
import { ProductsContext } from '../../context/products-context';
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography
} from '@material-ui/core';

const FilterByCategory = () => {
  const { products, setFiltered } = useContext(ProductsContext);

  const [filters, setFilters] = useState([]);

  const [state, setState] = useState({
    blush: false,
    bronzer: false,
    eyebrow: false,
    eyeliner: false,
    eyeshadow: false,
    foundation: false,
    'lip liner': false,
    mascara: false,
    'nail polish': false
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
      <Typography variant='body2'>CATEGORIES</Typography>
      <hr />
      <FormGroup column='true'>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.blush}
              onChange={handleChange}
              name='blush'
            />
          }
          label='Blush'
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state.bronzer}
              onChange={handleChange}
              name='bronzer'
            />
          }
          label='Bronzer'
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state.eyebrow}
              onChange={handleChange}
              name='eyebrow'
            />
          }
          label='Eyebrow'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.eyeliner}
              onChange={handleChange}
              name='eyeliner'
            />
          }
          label='Eyeliner'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.eyeshadow}
              onChange={handleChange}
              name='eyeshadow'
            />
          }
          label='Eyeshadow'
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state.foundation}
              onChange={handleChange}
              name='foundation'
            />
          }
          label='Foundation'
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state['lip liner']}
              onChange={handleChange}
              name='lip liner'
            />
          }
          label='lip liner'
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state.mascara}
              onChange={handleChange}
              name='mascara'
            />
          }
          label='Mascara'
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state['nail polish']}
              onChange={handleChange}
              name='nail polish'
            />
          }
          label='Nail Polish'
        />
      </FormGroup>
    </>
  );
};

export default FilterByCategory;
