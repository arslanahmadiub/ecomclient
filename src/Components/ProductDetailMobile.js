import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import Grid from "@material-ui/core/Grid";
import { Rating } from "@material-ui/lab";
import { useHistory, useLocation } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import easypaisaLogo from "../images/easypaisa.svg";
import whatsappLogo from "../images/whatsapp.svg";

const ProductDetailMobile = (props) => {
  const data = useLocation().state;
  const history = useHistory();
  let productData = data && data.data;
  console.log(productData);
  let handelBack = () => {
    history.push("/");
  };

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
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                flexDirection: "column",
              }}
            >
              Title
            </h2>
            <h4
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                flexDirection: "column",
                marginTop: "10px",
              }}
            >
              {productData && productData.pTitle}
            </h4>
            <br />
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                flexDirection: "column",
              }}
            >
              Description
            </h2>
            <ul style={{ marginTop: "10px" }}>
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
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  flexDirection: "column",
                }}
              >
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
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  flexDirection: "column",
                }}
              >
                <h4 style={{ marginTop: "10px" }}>
                  Stock: {productData.pStock}
                </h4>
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  flexDirection: "column",
                  marginTop: "10px",
                }}
              >
                <h2>Order Now</h2>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <img src={whatsappLogo} width="25px" />

                  <h4 style={{ marginLeft: "5px" }}>0333-1447009</h4>
                </div>
                <img
                  src={easypaisaLogo}
                  width="100px"
                  style={{ marginTop: "10px", marginBottom: "20px" }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <Hidden only={["sm", "xs"]}>
        <Grid
          container
          justify="center"
          spacing={2}
          style={{ paddingTop: "1%", paddingLeft: "5%" }}
        >
          <Grid item xs={12}>
            <IconButton color="primary" component="span" onClick={handelBack}>
              <KeyboardBackspaceIcon />
            </IconButton>
          </Grid>
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

              <Grid item xs={12} style={{ marginTop: "1%" }}>
                <h4 style={{ marginTop: "10px" }}>
                  Stock: {productData.pStock}
                </h4>
              </Grid>
              <Grid item xs={12} style={{ marginTop: "2%" }}>
                <h2>Order Now</h2>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <img src={whatsappLogo} width="25px" />

                  <h4 style={{ marginLeft: "5px" }}>0333-1447009</h4>
                </div>
                <img
                  src={easypaisaLogo}
                  width="100px"
                  style={{ marginTop: "25px" }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </>
  );
};

export default ProductDetailMobile;
