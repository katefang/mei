import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCategory from "../../components/product-category/product-category.component";

const CategoriesPage = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      console.log(category);
      const response = await axios(
        `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${category}`
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

export default CategoriesPage;
