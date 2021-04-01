import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Input from "../CustomComponents/Input";
import Select from "../CustomComponents/Select";
import Button from "../CustomComponents/Button";
import MiniFilePicker from "../CustomComponents/MiniFilePicker";
import Alert from "@material-ui/lab/Alert";
import Joi from "joi-browser";
import { createProduct } from "../../Services/productService";
import { multiFileUpload } from "../../Services/productService";

const LaptopAccesories = () => {
  const [images, setImages] = useState(null);
  const [clear, setClear] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  let schema = {
    productTitle: Joi.string().required().label("Product Title"),
    productPrice: Joi.string().required().label("Product Price"),
    productRating: Joi.number()
      .required()
      .min(1)
      .max(5)
      .label("Product Rating"),
    productCategory: Joi.string().required().label("Product Category"),
    productStock: Joi.number().required().min(0).label("Product Stock"),
  };
  let getImages = (value) => {
    setImages(value);
  };
  // useEffect(() => {
  //   setClear(!clear);
  // }, [clear]);

  let [productData, setProductData] = useState({
    productTitle: "",
    productPrice: "",
    productRating: "",
    productCategory: "",
    productStock: "",
  });
  let {
    productTitle,
    productPrice,
    productRating,
    productCategory,
    productStock,
  } = productData;

  const [productDescription, setProductDescription] = useState("");
  const [productDescriptionLabel, setProductDescriptionLabel] = useState([]);

  let productCat = ["Mobile", "Laptop", "Accessories", "Medical"];

  let handelProductDescriptionChange = (e) => {
    setProductDescription(e.target.value);
  };

  let handelChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  let validate = () => {
    let options = { abortEarly: false };
    let { error } = Joi.validate(productData, schema, options);
    if (!error) return null;

    let errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  let handelSubmit = async () => {
    setErrorMessage(null);
    let data = validate();
    if (data) {
      setErrorMessage(data);
    } else if (productDescriptionLabel.length < 1) {
      setErrorMessage({
        productDescript: '"Product Description" is not allowed to be empty',
      });
    } else {
      if (images.length > 0) {
        const fdm = new FormData();
        for (var x = 0; x < images.length; x++) {
          fdm.append("images", images[x]);
        }
        try {
          let result = await multiFileUpload(fdm);

          let dataObject = {
            pTitle: productTitle,
            pPrice: productPrice,
            pRating: productRating,
            pCategory: productCategory,
            pStock: productStock,
            pDescription: productDescriptionLabel,
            pImages: result.data,
          };
          try {
            let { data } = await createProduct(dataObject);

            setProductData({
              productTitle: "",
              productPrice: "",
              productRating: "",
              productCategory: "",
              productStock: "",
            });
            setProductDescriptionLabel([]);
            setClear(!clear);
          } catch (error) {
            setErrorMessage({
              serverError: "Server Error...",
            });
          }
        } catch (error) {
          console.log(error.response.data);
          setErrorMessage({
            serverError: "Server Error...",
          });
        }
      }
    }
  };

  let handelKeyDown = (e) => {
    if (e.key === "Enter") {
      if (productDescription.length > 0) {
        let data = [...productDescriptionLabel];
        data.push(productDescription);
        setProductDescriptionLabel(data);
        setProductDescription("");
      }
    }
  };

  let handeAlertDelete = (e) => {
    let data = [...productDescriptionLabel];
    data.splice(e, 1);
    setProductDescriptionLabel(data);
  };

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      spacing={5}
    >
      <Grid item xs={12}>
        <MiniFilePicker
          getFiles={(value) => getImages(value)}
          clearImages={clear}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Input
          type="text"
          placeholder="Enter Product Title"
          label="Product Title"
          required
          name="productTitle"
          value={productTitle}
          onChange={handelChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Input
          type="number"
          placeholder="Enter Product Price"
          label="Product Price"
          required
          min="1"
          max="100"
          name="productPrice"
          value={productPrice}
          onChange={handelChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Input
          type="number"
          placeholder="Enter Product Rating"
          label="Product Rating"
          required
          name="productRating"
          value={productRating}
          onChange={handelChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Select
          placeholder="Select Product Category"
          list={productCat}
          label="Product Category"
          rows={5}
          required
          name="productCategory"
          value={productCategory}
          onChange={handelChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Input
          type="number"
          placeholder="Enter Stock Value"
          label="Product Stock"
          required
          onChange={handelChange}
          name="productStock"
          value={productStock}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}></Grid>
      {productDescriptionLabel && (
        <Grid item xs={12}>
          {productDescriptionLabel.map((item, index) => {
            return (
              <Alert
                onClose={() => handeAlertDelete(index)}
                key={index}
                variant="filled"
                severity="success"
                style={{ marginBottom: "10px" }}
              >
                {item}
              </Alert>
            );
          })}
        </Grid>
      )}

      <Grid item xs={12} sm={12} md={12}>
        <Input
          type="text"
          placeholder="Enter Product Description"
          label="Product Description"
          required
          value={productDescription}
          name="productDescription"
          onChange={handelProductDescriptionChange}
          onKeyDown={handelKeyDown}
        />
      </Grid>
      <Grid item xs={12}>
        {/* {error.map((item, index) => {
          return (
            <Alert
              variant="filled"
              severity="error"
              style={{ marginBottom: "10px" }}
              key={index}
            >
              {item.message}
            </Alert>
          );
        })} */}

        {errorMessage &&
          Object.keys(errorMessage).map((item, index) => {
            return (
              <Alert
                variant="filled"
                severity="error"
                style={{ marginBottom: "10px" }}
                key={index}
              >
                {errorMessage[item]}
              </Alert>
            );
          })}
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Button width="100%" onClick={handelSubmit}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default LaptopAccesories;
