import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import CategoriesPage from "./pages/categories-page/categories-page.component";
import BrandsPage from "./pages/brands-page/brands-page.component";
import TypesPage from "./pages/types-page/types-page.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import theme from "./App.styles";
import Header from "../src/components/header/header.component";
import SubHeader from "../src/components/subheader/subheader.component";
import NavBar from "../src/components/nav-bar/nav-bar.component";
import Footer from "../src/components/footer/footer.component";

import { MuiThemeProvider, CssBaseline } from "@material-ui/core";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <SubHeader />
      <NavBar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/categories" component={CategoriesPage} />
        <Route path="/brands" component={BrandsPage} />
        <Route path="/types" component={TypesPage} />
        <Route path="/signin" component={SignInSignUp} />
      </Switch>
      <Footer />
    </MuiThemeProvider>
  );
}

export default App;
