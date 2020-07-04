import React from 'react';
import FilterByConcern from '../filter-by-concern/filter-by-concern.component';
import FilterByCategory from '../filter-by-category/filter-by-category.component';
import FilterByBrand from '../filter-by-brand/filter-by-brand.component';
import './sidebar.styles.scss';

const SideBar = () => {
  return (
    <div className='sidebar'>
      <FilterByConcern className='section' />
      <FilterByCategory className='section' />
      <FilterByBrand className='section' />
    </div>
  );
};

export default SideBar;
