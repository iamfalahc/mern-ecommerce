import { productInstance } from "../Axios/axiosInstance";

export const getProductByCategory = (category) => {
  return productInstance.get(`/api/products/${category}`);
};