import api from "../Api/api";
import Cookies from "js-cookie";
import { IPlayersRequest } from "./players.structure";

class Players {
  async getPlayersByTeam(team: number): Promise<IPlayersRequest | false> {
    const key = Cookies.get("key");
    try {
      const { data: { response } } = await api.get("/players/squads" ,{
        headers: {
          "x-rapidapi-host": "v3.football.api-sports .io",
          "x-rapidapi-key": key
        },
        params: {
          team
        }
      });

      return response
    } catch (error) {
      return false
    }
  }
}

export default new Players();
