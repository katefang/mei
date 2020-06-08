import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductCategory from "../../components/product-category/product-category.component";

const TypesPage = ({ makeup, setMakeup }) => {
  const { type } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        `https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=${type}`
      );
      console.log(response);
      setMakeup(response.data);
    };
    fetchData();
  }, [type]);
  return (
    <>
      <ProductCategory products={makeup} />
    </>
  );
};

export default TypesPage;
