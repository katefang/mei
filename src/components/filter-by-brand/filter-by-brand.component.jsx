import React, { useState, useEffect, useContext } from 'react';
import { ProductsContext } from '../../context/products-context';
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography
} from '@material-ui/core';

const FilterByBrand = () => {
  const { products, setFiltered } = useContext(ProductsContext);

  const [filters, setFilters] = useState([]);

  const [state, setState] = useState({
    almay: false,
    alva: false,
    'anna sui': false,
    annabelle: false,
    benefit: false,
    boosh: false,
    "burt's bees": false,
    'butter london': false,
    "c'est moi": false,
    'cargo cosmetics': false,
    'china glaze': false,
    clinique: false,
    'coastal classic creation': false,
    colourpop: false,
    covergirl: false,
    dalish: false,
    deciem: false,
    dior: false,
    'dr. hauschka': false,
    'e.l.f.': false,
    essie: false,
    fenty: false,
    glossier: false,
    'green people': false,
    iman: false,
    "l'oreal": false,
    'lotus cosmetics usa': false,
    "maia's mineral galaxy": false,
    marcelle: false,
    marienatie: false,
    maybelline: false,
    milani: false,
    'mineral fusion': false,
    misa: false,
    mistura: false,
    moov: false,
    nudus: false,
    nyx: false,
    orly: false,
    pacifica: false,
    'penny lane organics': false,
    'physicians formula': false,
    'piggy paint': false,
    'pure anada': false,
    'rejuva minerals': false,
    revlon: false,
    "sally b's skin yummies": false,
    'salon perfect': false,
    sante: false,
    'sinful colours': false,
    smashbox: false,
    stila: false,
    suncoat: false,
    w3llpeople: false,
    'wet n wild': false,
    zorah: false,
    'zorah biocosmetiques': false
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
      <Typography variant='body2'>BRANDS</Typography>
      <hr />
      <FormGroup column='true'>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.almay}
              onChange={handleChange}
              name='almay'
            />
          }
          label='Almay'
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state.alva}
              onChange={handleChange}
              name='alva'
            />
          }
          label='alva'
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state['anna sui']}
              onChange={handleChange}
              name='anna sui'
            />
          }
          label='Anna Sui'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.annabelle}
              onChange={handleChange}
              name='annabelle'
            />
          }
          label='annabelle'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.benefit}
              onChange={handleChange}
              name='benefit'
            />
          }
          label='Benefit'
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state.boosh}
              onChange={handleChange}
              name='boosh'
            />
          }
          label='Boosh'
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state["burt's bees"]}
              onChange={handleChange}
              name="burt's bees"
            />
          }
          label="burt's bees"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state['butter london']}
              onChange={handleChange}
              name='butter london'
            />
          }
          label='Butter London'
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state["c'est moi"]}
              onChange={handleChange}
              name="c'est moi"
            />
          }
          label="c'est moi"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state['cargo cosmetics']}
              onChange={handleChange}
              name='cargo cosmetics'
            />
          }
          label='cargo cosmetics'
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state['china glaze']}
              onChange={handleChange}
              name='china glaze'
            />
          }
          label='China Glaze'
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state.clinique}
              onChange={handleChange}
              name='clinique'
            />
          }
          label='Clinique'
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state['coastal classic creation']}
              onChange={handleChange}
              name='coastal classic creation'
            />
          }
          label='coastal classic creation'
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state.colourpop}
              onChange={handleChange}
              name='colourpop'
            />
          }
          label='colourpop'
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state.covergirl}
              onChange={handleChange}
              name='covergirl'
            />
          }
          label='Covergirl'
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state.deciem}
              onChange={handleChange}
              name='deciem'
            />
          }
          label='deciem'
        />
      </FormGroup>
    </>
  );
};

export default FilterByBrand;
