import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import Grid from "@material-ui/core/Grid";
import { Rating } from "@material-ui/lab";
const ProductDetail = () => {
  return (
    <Grid container direction="row" justify="center" style={{ padding: "1%" }}>
      <Grid item md={6}>
        <Slider>
          <img
            style={{ objectFit: "contain" }}
            src="https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=6&m=535695503&s=612x612&w=0&h=uP8aDK4xlfjk3kEiyr9wwUiuh80UwAiICweFpiBDosk="
          />
          <img
            style={{ objectFit: "contain" }}
            src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
          />
          <img
            style={{ objectFit: "contain" }}
            src="https://s18.postimg.cc/tdc4amjl5/img3.jpg"
          />
        </Slider>
      </Grid>
      <Grid item md={6} style={{ paddingLeft: "2%" }}>
        <h2>Title</h2>
        <h4 style={{ marginTop: "10px" }}>HP ProLiant DL 380 G7</h4>
        <br />
        <h2>Description</h2>
        <ul style={{ marginTop: "10px", marginLeft: "20px" }}>
          <li style={{ marginTop: "5px" }}>HP ProLiant DL 380 G7</li>
          <li style={{ marginTop: "5px" }}>Processor :- 2 X Intel</li>
          <li style={{ marginTop: "5px" }}>
            Xeon X5650 12 Core / 2.67GHz /24 MB Cache
          </li>
          <li style={{ marginTop: "5px" }}>Memory:- 32 GB DDR3 10600R</li>
          <li style={{ marginTop: "5px" }}>Hard Drives : 4x SAS 300GB 2.5 "</li>
          <li style={{ marginTop: "5px" }}>
            Raid Controller:- Smart Array P410i/ 512 MB Cache
          </li>
          <li style={{ marginTop: "5px" }}>
            Network Controller:- Ethernet 1Gb /4-Port
          </li>
          <li style={{ marginTop: "5px" }}>Dual Power Supply</li>
        </ul>
        <br />
        <Grid
          container
          direction="row"
          justify="center"
          style={{ padding: "1%" }}
        >
          <Grid item md={6}>
            <h2>Price</h2>
            <h4 style={{ marginTop: "10px" }}>Rs 26,000 Only</h4>
            <Rating
              name="read-only"
              value={5}
              readOnly
              style={{ marginTop: "10px" }}
            />
          </Grid>
          <Grid item md={6}>
            <h2>Contact</h2>
            <h4 style={{ marginTop: "10px" }}>0302-3338991</h4>
            <h4 style={{ marginTop: "5px" }}>0302-3338991</h4>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductDetail;
