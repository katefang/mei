import React, { useState } from 'react';
import { Input, InputAdornment } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom';
import BrandNames from '../brands/brand-names';
import CategoryNames from '../category-list/category-names';
import TypeNames from '../types/type-names';
import './subheader.styles.scss';
import { ReactComponent as ShoppingCart } from '../../assets/shopping-cart.svg';

const SubHeader = () => {
  const history = useHistory();
  const [searchInput, setSearchInput] = useState('');

  const handleChange = e => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (BrandNames.includes(searchInput.toLowerCase())) {
      history.push(`/brand/${searchInput}`);
    } else if (CategoryNames.includes(searchInput.toLowerCase())) {
      history.push(`/category/${searchInput}`);
    } else if (TypeNames.includes(searchInput.toLowerCase())) {
      history.push(`/types/${searchInput}`);
    } else if (searchInput.toLowerCase() === 'cest moi') {
      history.push(`/brand/c'est moi`);
    } else if (searchInput.toLowerCase() === 'dr hauschka') {
      history.push('/brand/dr. hauschka');
    } else if (searchInput.toLowerCase() === 'elf') {
      history.push('/brand/e.l.f.');
    } else if (searchInput.toLowerCase() === 'certified clean') {
      history.push('/types/CertClean');
    } else if (searchInput.toLowerCase() === 'wellpeople') {
      history.push('/brand/w3llpeople');
    } else {
      history.push(`/searchsite/${searchInput}`);
    }
  };

  return (
    <div className='subheader'>
      <Link to='/'>
        <img src={require('../../assets/mei.svg')} alt='Mei logo' />
      </Link>
      <form onSubmit={handleSubmit} className='search-wrapper'>
        <Input
          variant='outlined'
          className='search-bar'
          type='text'
          onChange={handleChange}
          placeholder='Search...'
          endAdornment={
            <InputAdornment position='end'>
              <Search onClick={handleSubmit} />
            </InputAdornment>
          }
        />
        <ShoppingCart className='shopping-cart' />
      </form>
    </div>
  );
};

export default SubHeader;
