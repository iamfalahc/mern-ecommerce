import { userInstance } from "../Axios/axiosInstance";

// Function to sign up a new user
export const userSignUp = (values) => {
  return userInstance.post("/api/signup", { ...values });
};

// Function to log in a user
export const userLogIn = (values) => {
  return userInstance.post("/api/login", { ...values });
};

// Function to log in an admin
export const adminLogIn = (values) => {
  return userInstance.post("/api/admin/login", { ...values });
};

