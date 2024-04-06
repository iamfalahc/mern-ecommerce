import axios from "axios";

//Axios instance for making requests related to user functionalities
const userInstance = axios.create({ baseURL: "http://localhost:4000" });

//Axios instance for making requests related to product functionalities
const productInstance = axios.create({ baseURL: "http://localhost:4000" });

//Axios instance for making requests related to admin functionalities
const adminInstance = axios.create({
  baseURL: `${"http://localhost:4000"}/admin`,
});

export { userInstance, adminInstance, productInstance };
