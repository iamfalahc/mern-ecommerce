import { userInstance } from "../Axios/axiosInstance";

export const userSignUp = (values) => {
  return userInstance.post("/api/signup", { ...values });
};
export const userLogIn = (values) => {
  return userInstance.post("/api/login", { ...values });
};
export const adminLogIn = (values) => {
  return userInstance.post("/api/admin/login", { ...values });
};
