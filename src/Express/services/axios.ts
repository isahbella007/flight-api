import axios from "axios";
import axiosConfig from "../config/axios";

const axiosInstance = axios.create({
    baseURL: axiosConfig.base_url
})

export default axiosInstance