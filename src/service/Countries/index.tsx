import api from "../Api/api";
import { ICountries, ICountriesRequest } from "./countries.structure";

class Countries {
  async validateKey(key: string): Promise<true | false> {
    try {
      const { data } = await api.get<ICountriesRequest>("/countries", {
        headers: {
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

  async getAllCoutries(): Promise<ICountries[] | false> {
    try {
      const { data } = await api.get("/countries");

      return data
    } catch (error) {
      return false
    }
  }
}

export default new Countries();
