import axios from "axios";

const api = axios.create({
  baseURL: "https://rest-api-nswt.herokuapp.com/",
});

export default api;