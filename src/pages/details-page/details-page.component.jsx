import React from "react";
import ProductDetails from "../../components/product-details/product-details.component";
import { useParams } from "react-router-dom";

const DetailsPage = ({ makeup }) => {
  return <>{makeup && <ProductDetails products={makeup} />}</>;
};

export default DetailsPage;
