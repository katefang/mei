import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCategory from "../../components/product-category/product-category.component";
import { ProductsContext } from "../../context/products-context";

const CategoriesPage = () => {
  const { products, setProducts, setFiltered } = useContext(ProductsContext);
  const { category } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${category}`
      );
      setProducts(response.data);
      setFiltered(response.data);
    };
    fetchData();
  }, [category]);
  return (
    <>
      <ProductCategory products={products} />
    </>
  );
};

export default CategoriesPage;
