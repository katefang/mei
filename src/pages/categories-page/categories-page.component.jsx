import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCategory from "../../components/product-category/product-category.component";

const CategoriesPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=}`
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
