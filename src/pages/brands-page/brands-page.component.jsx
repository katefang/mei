import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCategory from "../../components/product-category/product-category.component";
import { useParams } from "react-router-dom";

const BrandsPage = () => {
  const [products, setProducts] = useState([]);
  const { brand } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`
      );
      console.log(response);
      setProducts(response.data);
      console.log(products);
    };
    fetchData();
  }, []);
  return (
    <>
      <ProductCategory products={products} />
    </>
  );
};

export default BrandsPage;
