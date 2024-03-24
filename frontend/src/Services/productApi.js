import { productInstance } from "../Axios/axiosInstance";

export const getProductByCategory = (category) => {
  return productInstance.get(`/api/products/${category}`);
};
export const getSingleProduct = (id) => {
  return productInstance.get(`/api/product/${id}`);
};
export const createProduct = (values) => {
  return productInstance.post(`/api/admin/product`, { ...values });
};
export const listProduct = () => {
  return productInstance.get(`/api/products`);
};