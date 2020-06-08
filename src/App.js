import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import DetailsPage from "./pages/details-page/details-page";
import CategoriesPage from "./pages/categories-page/categories-page";
import BrandsPage from "./pages/brands-page/brands-page";
import TypesPage from "./pages/types-page/types-page";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up-page";
import AllProductsPage from "./pages/all-products-page/all-products-page";
import ProductNotFoundPage from "./pages/product-not-found-page/product-not-found-page";
import theme from "./App.styles.js";
import Header from "../src/components/header/header.component";
import SubHeader from "../src/components/subheader/subheader.component";
import NavBar from "../src/components/nav-bar/nav-bar.component";
import Footer from "../src/components/footer/footer.component";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ProductsContextProvider from "./context/products-context";

const useStyles = makeStyles(theme => ({
  divider: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    opacity: "0.4",
  },
  body: {
    width: "80%",
    margin: "0 auto",
  },
}));

function App() {
  const { pathname } = useLocation();
  const { divider, body } = useStyles();

  return (
    <ProductsContextProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <div className={body}>
          <SubHeader />
          {pathname !== "/signin" && <NavBar />}
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shopall" component={AllProductsPage} />
            <Route
              exact
              path="/category/:category"
              component={CategoriesPage}
            />
            <Route path="/brand/:brand" component={BrandsPage} />
            <Route path="/types/:type" component={TypesPage} />
            <Route path="/signin" component={SignInSignUp} />
            <Route path="/details/:id" component={DetailsPage} />
            <Route
              path="/searchsite/:keyword"
              component={ProductNotFoundPage}
            />
          </Switch>
          <hr className={divider} />
        </div>
        <Footer />
      </MuiThemeProvider>
    </ProductsContextProvider>
  );
}

export default App;
