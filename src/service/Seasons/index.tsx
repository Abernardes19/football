import api from "../Api/api";
import Cookies from "js-cookie";
import { ISeaonsResponse } from "./seasons.structure";

class Seasons {
  async getAllLeaguesByCountry(): Promise<ISeaonsResponse | false> {
    const key = Cookies.get("key");
    try {
      const { data } = await api.get("/seasons" ,{
        headers: {
          "x-rapidapi-host": "v3.football.api-sports .io",
          "x-rapidapi-key": key
        }
      });

      return data
    } catch (error) {
      return false
    }
  }
}

export default new Seasons();
