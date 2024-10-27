import axios from "axios";

const axiosBase = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL: "https://deploy-evagadiforum-2024.onrender.com",
});

export default axiosBase;
