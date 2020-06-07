import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCategory from "../../components/product-category/product-category.component";

const CategoriesPage = ({ makeup, setMakeup }) => {
  const { category } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${category}`
      );
      console.log(response.data);
      setMakeup(response.data);
    };
    fetchData();
  }, [category]);
  return (
    <>
      <ProductCategory products={makeup} />
    </>
  );
};

export default CategoriesPage;
