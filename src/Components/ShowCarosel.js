import React, { useState, useEffect } from "react";
import CaroselItem from "./CaroselItem";

import { getProduct } from "../Services/productService";

const ShowCarosel = () => {
  const [medical, setMedical] = useState([]);
  const [laptop, setLaptop] = useState([]);
  const [mobile, setMobile] = useState([]);
  const [accesories, setAccesories] = useState([]);

  let fetchProduct = async () => {
    try {
      let { data } = await getProduct();
      let mobileData = data.filter((item) => {
        return item.pCategory === "Mobile";
      });
      if (mobileData) {
        setMobile(mobileData);
      }
      let laptopData = data.filter((item) => {
        return item.pCategory === "Laptop";
      });
      if (mobileData) {
        setLaptop(laptopData);
      }
      let medicalData = data.filter((item) => {
        return item.pCategory === "Medical";
      });
      if (medicalData) {
        setMedical(medicalData);
      }
    } catch (error) {
      console.log("Some thing went wrong or server");
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      {medical.length > 0 && <CaroselItem heading="Medical" data={medical} />}
      {laptop.length > 0 && <CaroselItem heading="Laptop" data={laptop} />}
      {mobile.length > 0 && <CaroselItem heading="Mobile" data={mobile} />}
      {accesories.length > 0 && (
        <CaroselItem heading="Accesories" data={accesories} />
      )}
    </>
  );
};

export default ShowCarosel;
