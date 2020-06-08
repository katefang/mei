import React from "react";
import FilterByConcerns from "./filter-by-concerns.component";

const SideBar = ({ products }) => {
  return <FilterByConcerns products={products} />;
};

export default SideBar;
