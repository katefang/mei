import React from "react";
import ProductDetails from "../../components/product-details/product-details.component";

const DetailsPage = ({ makeup }) => {
  return <>{makeup && <ProductDetails products={makeup} />}</>;
};

export default DetailsPage;
