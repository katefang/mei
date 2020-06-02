import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductCategory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      );
      console.log(response);
      setProducts(response.data);
    };
    fetchData();
  }, []);

  return (
    <>
      {products.map(product => (
        <p>{product.name}</p>
      ))}
    </>
  );
};

export default ProductCategory;
