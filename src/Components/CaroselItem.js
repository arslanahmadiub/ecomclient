import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import image from "../images/product-min-01.jpg";
import ProductView from "./ProductView";
import { Grid } from "@material-ui/core";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const CaroselItem = (props) => {
  let { heading, data } = props;

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "5%",
        }}
      >
        <h1 style={{ color: "#5336A4" }}>{heading && heading}</h1>
      </Grid>
      <Grid
        container
        style={{
          paddingLeft: "5%",
          paddingRight: "5%",
          paddingTop: "2%",
          paddingBottom: "5%",
          overflowY: "hidden",
        }}
      >
        <Grid item xs={12}>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            customTransition="all 5s linear"
            infinite
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          >
            {data &&
              data.map((item, index) => {
                return (
                  <div style={{ padding: "5%" }} key={index}>
                    <ProductView data={item} />
                  </div>
                );
              })}
          </Carousel>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CaroselItem;
