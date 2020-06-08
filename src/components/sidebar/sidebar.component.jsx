import React from "react";
import FilterByConcerns from "./filter-by-concerns.component";

const SideBar = ({ products, setData }) => {
  return <FilterByConcerns products={products} setData={setData} />;
};

export default SideBar;
