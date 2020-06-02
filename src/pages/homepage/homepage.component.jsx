import React from "react";
import Header from "../../components/header/header.component";
import SubHeader from "../../components/subheader/subheader.component";
import NavBar from "../../components/nav-bar/nav-bar.component";
import Footer from "../../components/footer/footer.component";
import PhotosContainer from "../../components/photos-container/photos-container.component";

const Homepage = () => (
  <>
    <Header />
    <SubHeader />
    <NavBar />
    <PhotosContainer />
    <Footer />
  </>
);

export default Homepage;
