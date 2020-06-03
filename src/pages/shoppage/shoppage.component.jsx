import React from "react";
import Header from "../../components/header/header.component";
import SubHeader from "../../components/subheader/subheader.component";
import NavBar from "../../components/nav-bar/nav-bar.component";
import Footer from "../../components/footer/footer.component";
import ProductCategory from "../product-category/product-category.component";

const ShopPage = () => {
  return (
    <>
      <Header />
      <SubHeader />
      <NavBar />
      <ProductCategory />
      <Footer />
    </>
  );
};

export default ShopPage;
