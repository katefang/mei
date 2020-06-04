import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import DetailsPage from "./pages/details-page/details-page.component";
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
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  divider: {
    width: "80%",
    margin: "0 auto",
    marginTop: theme.spacing(4),
    opacity: "0.3",
  },
}));

function App() {
  const { pathname } = useLocation();
  const { divider } = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <SubHeader />
      {pathname !== "/signin" && <NavBar />}
      <Switch>
        <Route exact path="/" component={Homepage} />
        {/* <Route path="shopall" components={shopAllPage} /> */}
        <Route path="/category/:category" component={CategoriesPage} />
        <Route path="/brands/:brand" component={BrandsPage} />
        <Route path="/types/:type" component={TypesPage} />
        <Route path="/signin" component={SignInSignUp} />
        <Route path="/details/:name" component={DetailsPage} />
      </Switch>
      <hr className={divider} />
      <Footer />
    </MuiThemeProvider>
  );
}

export default App;
