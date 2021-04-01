import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";

import { getProduct } from "../../Services/productService";
import { deleteProduct } from "../../Services/productService";
import { updateProduct } from "../../Services/productService";

const ProductView = () => {
  const [state, setState] = useState({
    columns: [
      { title: "Product Name", field: "pTitle", editable: "never" },
      { title: "Product Price", field: "pPrice", editable: "never" },
      { title: "Product Category", field: "pCategory", editable: "never" },
      {
        title: "Stock",
        field: "pStock",
        editable: "onUpdate",
        type: "numeric",
        cellStyle: {
          textAlign: "inherit",
          flexDirection: "row",
        },
        headerStyle: {
          textAlign: "inherit",
          flexDirection: "row",
        },
      },
    ],
    data: [],
  });

  let fetchProduct = async () => {
    let { data } = await getProduct();
    setState({ ...state, data: data });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  let deleteData = async (oldData) => {
    let productId = {
      _id: oldData._id,
      images: oldData.pImages,
    };

    try {
      let { data } = await deleteProduct(productId);
    } catch (error) {
      fetchProduct();
    }
  };

  let updateData = async (newData, old) => {
    let index = old.tableData.id;
    let oldData = [...state.data];
    oldData[index] = newData;
    setState({ ...state, data: oldData });

    let data = {
      _id: newData._id,
      pPrice: newData.pPrice,
      pRating: newData.pRating,
      pStock: newData.pStock,
    };

    try {
      let result = await updateProduct(data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MaterialTable
      title="View Product"
      options={{ actionsColumnIndex: -1 }}
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            // setTimeout(() => {
            //   setData([...data, newData]);
            //   resolve();
            // }, 1000);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            updateData(newData, oldData);

            setTimeout(() => {
              resolve();
            }, 3000);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              deleteData(oldData);

              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
};

export default ProductView;
