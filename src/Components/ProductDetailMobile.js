import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import Grid from "@material-ui/core/Grid";
import { Rating } from "@material-ui/lab";
import { useLocation } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";

const ProductDetailMobile = (props) => {
  const data = useLocation().state;

  let productData = data && data.data;

  return (
    <>
      <Hidden only={["md", "lg", "xl"]}>
        <Grid container direction="column" justify="center">
          <Grid item xs={12}>
            <Slider>
              {productData &&
                productData.pImages.map((item, index) => {
                  return <img key={index} src={item.imageUrl} />;
                })}
            </Slider>
          </Grid>
          <br />
          <Grid item xs={12} style={{ paddingLeft: "4%", paddingRight: "4%" }}>
            <h2>Title</h2>
            <h4 style={{ marginTop: "10px" }}>
              {productData && productData.pTitle}
            </h4>
            <br />
            <h2>Description</h2>
            <ul style={{ marginTop: "10px", marginLeft: "20px" }}>
              {productData &&
                productData.pDescription.map((item, index) => {
                  return (
                    <li style={{ marginTop: "5px" }} key={index}>
                      {item}
                    </li>
                  );
                })}
            </ul>
            <br />
            <Grid
              container
              direction="row"
              justify="center"
              style={{ padding: "1%" }}
            >
              <Grid item xs={12}>
                <h2>Price</h2>

                <h4 style={{ marginTop: "10px" }}>{`Rs ${
                  productData && productData.pPrice
                } Only`}</h4>
                <Rating
                  name="read-only"
                  value={productData && productData.pRating}
                  readOnly
                  style={{ marginTop: "10px" }}
                />
              </Grid>

              <Grid item xs={12} style={{ marginTop: "2%" }}>
                <h2>Contact</h2>
                <h4 style={{ marginTop: "10px" }}>0302-3338991</h4>
                <h4 style={{ marginTop: "5px" }}>0302-3338991</h4>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <Hidden only={["sm", "xs"]}>
        <Grid
          container
          justify="center"
          spacing={5}
          style={{ paddingTop: "5%", paddingLeft: "5%" }}
        >
          <Grid item xs={12}>
            <h1>Product Detail</h1>
          </Grid>

          <Grid item xs={6}>
            <Slider>
              {productData &&
                productData.pImages.map((item, index) => {
                  return <img key={index} src={item.imageUrl} />;
                })}
            </Slider>
          </Grid>
          <br />
          <Grid item xs={6} style={{ paddingLeft: "4%", paddingRight: "4%" }}>
            <h2>Title</h2>
            <h4 style={{ marginTop: "10px" }}>
              {productData && productData.pTitle}
            </h4>
            <br />
            <h2>Description</h2>
            <ul style={{ marginTop: "10px", marginLeft: "20px" }}>
              {productData &&
                productData.pDescription.map((item, index) => {
                  return (
                    <li style={{ marginTop: "5px" }} key={index}>
                      {item}
                    </li>
                  );
                })}
            </ul>
            <br />
            <Grid
              container
              direction="row"
              justify="center"
              style={{ padding: "1%" }}
            >
              <Grid item xs={12}>
                <h2>Price</h2>

                <h4 style={{ marginTop: "10px" }}>{`Rs ${
                  productData && productData.pPrice
                } Only`}</h4>
                <Rating
                  name="read-only"
                  value={productData && productData.pRating}
                  readOnly
                  style={{ marginTop: "10px" }}
                />
              </Grid>

              <Grid item xs={12} style={{ marginTop: "2%" }}>
                <h2>Contact</h2>
                <h4 style={{ marginTop: "10px" }}>0302-3338991</h4>
                <h4 style={{ marginTop: "5px" }}>0302-3338991</h4>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </>
  );
};

export default ProductDetailMobile;
