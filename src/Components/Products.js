import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import ProductView from "./ProductView";
import Pagination from "@material-ui/lab/Pagination";
import { useHistory, useLocation } from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
const Products = () => {
  let location = useLocation();
  const history = useHistory();

  let [endIndex, setEndIndex] = useState(8);

  let handelChange = (event, value) => {
    setEndIndex(8 * value);
  };
  let handelBack = () => {
    history.push("/");
  };
  return (
    <>
      <Grid
        container
        style={{
          padding: "5%",
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12}>
          <IconButton color="primary" component="span" onClick={handelBack}>
            <KeyboardBackspaceIcon />
          </IconButton>
        </Grid>
        {location.state.data.length > 0 ? (
          location.state.data
            .slice(endIndex - 8, endIndex)
            .map((item, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={4}
                  md={3}
                  key={index}
                  style={{
                    paddingBottom: "5%",
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <ProductView data={item} />
                </Grid>
              );
            })
        ) : (
          <h1>No product found...</h1>
        )}
      </Grid>
      {Math.ceil(location.state.data.length / 8) === 1 ? null : (
        <Grid container>
          <Grid
            item
            xs={12}
            style={{
              display: location.state.data.length > 0 ? "flex" : "none",
              width: "100%",
              justifyContent: "center",
              marginBottom: "5%",
            }}
          >
            <Pagination
              count={Math.ceil(location.state.data.length / 8)}
              color="primary"
              onChange={handelChange}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Products;
