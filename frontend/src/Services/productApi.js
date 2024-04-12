import { productInstance } from "../Axios/axiosInstance";

// Function to get products by category
export const getProductByCategory = (category) => {
  return productInstance.get(`/api/products/${category}`);
};

// Function to get a single product by its ID
export const getSingleProduct = (id) => {
  return productInstance.get(`/api/product/${id}`);
};

// Function to list all products
export const listProduct = () => {
  return productInstance.get(`/api/products`);
};

// Function to create a new product
export const createProduct = (values) => {
  return productInstance.post(`/api/admin/product`, values);
};

// Function to edit an existing product by its ID
export const editProduct = (id, values) => {
  return productInstance.put(`/api/admin/product/${id}`, values);
};

// Function to delete a product by its ID
export const deleteProduct = (id) => {
  return productInstance.delete(`/api/admin/product/${id}`);
};
