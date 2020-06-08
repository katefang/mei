import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCategory from "../../components/product-category/product-category.component";
import { useParams } from "react-router-dom";

const BrandsPage = ({ makeup, setMakeup }) => {
  const { brand } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`
      );
      setMakeup(response.data);
    };
    fetchData();
  }, [brand]);
  return (
    <>
      <ProductCategory products={makeup} />
    </>
  );
};

export default BrandsPage;
