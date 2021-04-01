import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import ProductView from "./ProductView";
import Pagination from "@material-ui/lab/Pagination";

const Products = () => {
  let [newArray, setNewArray] = useState([
    4,
    5,
    6,
    3,
    1,
    5,
    8,
    3,
    1,
    5,
    8,
    3,
    1,
    5,
    8,
  ]);
  let [endIndex, setEndIndex] = useState(8);

  let handelChange = (event, value) => {
    setEndIndex(8 * value);
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
        {newArray.slice(endIndex - 8, endIndex).map((item, index) => {
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
              <ProductView />
            </Grid>
          );
        })}
      </Grid>
      {Math.ceil(newArray.length / 8) === 1 ? null : (
        <Grid container>
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              marginBottom: "5%",
            }}
          >
            <Pagination
              count={Math.ceil(newArray.length / 8)}
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
