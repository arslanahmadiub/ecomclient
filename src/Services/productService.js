import axios from "axios";
import { apiEndPoint } from "../config.json";

let createProductUrl = apiEndPoint + "productPost";
let getProductUrl = apiEndPoint + "productGet";
const multiFileUploadUrl = apiEndPoint + "multiUpload";
const productDeleteUrl = apiEndPoint + "productDelete";
const productUpdateUrl = apiEndPoint + "productUpdate";

const saveUserUrl = apiEndPoint + "signup";
const loginUserUrl = apiEndPoint + "signin";

export async function createProduct(data) {
  return await axios({
    method: "post",
    url: createProductUrl,
    data: data,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function multiFileUpload(fd) {
  return await axios.post(multiFileUploadUrl, fd);
}

export async function getProduct() {
  return await axios.get(getProductUrl);
}
export async function deleteProduct(productId) {
  return await axios.post(productDeleteUrl, productId);
}

export async function updateProduct(data) {
  return await axios.post(productUpdateUrl, data);
}

export async function saveUser({ email, password }) {
  return axios.post(saveUserUrl, {
    email: email,
    password: password,
  });
}

export async function login(email, password) {
  return await axios.post(loginUserUrl, { email, password });
}
