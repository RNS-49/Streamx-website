import axios from "axios";
import { apiBaseUrl } from "./Api";


const instance = axios.create({
  baseURL: apiBaseUrl,
});

export default instance