import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import theme from "./App.styles";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Switch></Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={ShopPage} />
      <Route path="/signin" component={SignInSignUp} />
      <Route path="/shop:id" component={ShopPage} />
    </MuiThemeProvider>
  );
}

export default App;
