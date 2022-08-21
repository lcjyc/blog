import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://lesleyblog.herokuapp.com/api/",
});
