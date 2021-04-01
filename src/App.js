import React from "react";
import "./custom.scss";
import ProductDetailMobile from "./Components/ProductDetailMobile";
// import ProductDetailDesktop from "./Components/ProductDetailDesktop";
import ProductView from "./Components/ProductView";
import Grid from "@material-ui/core/Grid";
import Topbar from "./Components/Topbar";
import LaptopProduct from "./Components/LaptopProduct";
import Products from "./Components/Products";
import Admin from "./Components/Admin/Admin";
import ShowCarosel from "./Components/ShowCarosel";
import { Redirect, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Topbar />
          <ShowCarosel />
        </Route>
        <Route exact path="/productDetail">
          <ProductDetailMobile />
        </Route>
        <Route exact path="/admin">
          <Admin />
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
