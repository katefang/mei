import React from "react";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";
import Header from "../../components/header/header.component";
import SubHeader from "../../components/subheader/subheader.component";
import NavBar from "../../components/nav-bar/nav-bar.component";
import Footer from "../../components/footer/footer.component";

const SignInSignUp = () => {
  return (
    <>
      <Header />
      <SubHeader />
      <NavBar />
      <SignIn />
      <SignUp />
      <Footer />
    </>
  );
};

export default SignInSignUp;
