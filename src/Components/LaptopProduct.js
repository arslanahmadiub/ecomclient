import React from "react";
import CaroselItem from "./CaroselItem";

const LaptopProduct = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          padding: "5%",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <h1 style={{ color: "brown" }}>Laptop Section</h1>
      </div>
      <div
        style={{
          display: "flex",
          paddingLef: "5%",
          paddingRight: "5%",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <CaroselItem />
      </div>
    </>
  );
};

export default LaptopProduct;
