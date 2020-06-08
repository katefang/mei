import React, { useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductCategory from "../../components/product-category/product-category.component";
import { ProductsContext } from "../../context/products-context";

const TypesPage = () => {
  const { products, setProducts, setFiltered } = useContext(ProductsContext);
  const { type } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        `https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=${type}`
      );
      setProducts(response.data);
      setFiltered(response.data);
    };
    fetchData();
  }, [type]);
  return (
    <>
      <ProductCategory products={products} />
    </>
  );
};

export default TypesPage;
