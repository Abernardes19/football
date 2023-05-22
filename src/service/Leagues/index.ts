import api from "../Api/api";
import Cookies from "js-cookie";
import { ILeaguesRequest } from "./leagues.structure";

class Leagues {
  async getAllLeaguesByCountry(country: string): Promise<ILeaguesRequest | false> {
    const key = Cookies.get("key");
    try {
      const { data } = await api.get("/leagues" ,{
        headers: {
          "x-rapidapi-host": "v3.football.api-sports .io",
          "x-rapidapi-key": key
        },
        params: {
          country
        }
      });

      return data
    } catch (error) {
      return false
    }
  }
}

export default new Leagues();
