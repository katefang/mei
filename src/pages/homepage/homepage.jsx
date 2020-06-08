import React from "react";
import PhotosContainer from "../../components/photos-container/photos-container.component";
import ShopByHeading from "../../components/shopby/shopby-heading.component";
import FeaturedBrands from "../../components/shopby/featured-brands.component";
import ShopByCategory from "../../components/shopby/shop-by-category.component";

const Homepage = () => {
  return (
    <>
      <PhotosContainer />
      <ShopByHeading>Featured Brands</ShopByHeading>
      <FeaturedBrands />
      <ShopByHeading>Shop By Category</ShopByHeading>
      <ShopByCategory />
    </>
  );
};
export default Homepage;
