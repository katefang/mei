import React, { useEffect, useContext } from "react";
import axios from "axios";
import ProductCategory from "../../components/product-category/product-category.component";
import { ProductsContext } from "../../context/products-context";

const AllProductsPage = () => {
  const { setProducts, setFiltered } = useContext(ProductsContext);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        `https://makeup-api.herokuapp.com/api/v1/products.json?`
      );
      console.log(response);
      setProducts(response.data);
      setFiltered(response.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <ProductCategory />
    </>
  );
};

export default AllProductsPage;
