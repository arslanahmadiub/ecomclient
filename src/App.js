import React from "react";
import "./custom.scss";
import ProductDetailMobile from "./Components/ProductDetailMobile";

import Topbar from "./Components/Topbar";
import Signin from "./Components/Signin";
import Footer from "./Components/Footer";

import Products from "./Components/Products";
import Admin from "./Components/Admin/Admin";
import ShowCarosel from "./Components/ShowCarosel";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Topbar />
          <ShowCarosel />
          <Footer />
        </Route>
        <Route exact path="/productDetail">
          <ProductDetailMobile />
        </Route>

        <ProtectedRoute exact path="/admin" component={Admin} />

        <Route exact path="/login">
          <Signin />
        </Route>
        <Route exact path="/allProduct">
          <Products />
        </Route>
      </Switch>
      {/* <Admin /> */}
    </>
  );
};

export default App;
