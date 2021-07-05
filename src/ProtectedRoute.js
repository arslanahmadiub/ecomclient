import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  return (
    <Route
      exact
      path={path}
      {...rest}
      render={(props) => {
        if (sessionStorage.getItem("token") === null) {
          return <Redirect to="/login" />;
        }
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
