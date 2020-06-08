import React, { useEffect, useContext } from "react";
import axios from "axios";
import ProductCategory from "../../components/product-category/product-category.component";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/products-context";

const BrandsPage = () => {
  const { products, setProducts, setFiltered } = useContext(ProductsContext);
  const { brand } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`
      );
      setProducts(response.data);
      setFiltered(response.data);
    };
    fetchData();
  }, [brand]);
  return (
    <>
      <ProductCategory products={products} />
    </>
  );
};

export default BrandsPage;
