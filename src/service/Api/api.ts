import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "https://v3.football.api-sports.io",
});

axios.interceptors.request.use(function (config){
  const key = Cookies.get("key");
  config.headers["x-rapidapi-host"] = "v3.football.api-sports .io";
  config.headers["x-rapidapi-key"] = key

  return config
})

export default api;
