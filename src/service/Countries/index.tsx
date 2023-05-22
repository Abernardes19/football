import api from "../Api/api";
import Cookies from "js-cookie";
import { ICountriesRequest } from "./countries.structure";

class Countries {
  async validateKey(key: string): Promise<true | false> {
    try {
      const { data } = await api.get<ICountriesRequest>("/countries", {
        headers: {
          "x-rapidapi-host": "v3.football.api-sports .io",
          "x-rapidapi-key":  key
        },
        params: {
          name: "Brazil"
        }
      });
      if (!Array.isArray(data.errors) && data.errors.token) {
        return false
      }
      return true
    } catch (error) {
      return false
    }
  }

  async getAllCoutries(): Promise<ICountriesRequest | false> {
    const key = Cookies.get("key");
    try {
      const { data } = await api.get("/countries" ,{
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

export default new Countries();
