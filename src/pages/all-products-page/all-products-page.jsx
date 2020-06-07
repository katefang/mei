import React, { useEffect } from "react";
import axios from "axios";
import ProductCategory from "../../components/product-category/product-category.component";

const AllProductsPage = ({ makeup, setMakeup }) => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        `http://makeup-api.herokuapp.com/api/v1/products.json?`
      );
      console.log(response);
      setMakeup(response.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <ProductCategory products={makeup} />
    </>
  );
};

export default AllProductsPage;
