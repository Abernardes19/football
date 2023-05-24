import api from "../Api/api";
import Cookies from "js-cookie";
import { IStatiscsRequest, ITeamsRequest } from "./teams.structure";

class Teams {
  async getTeamsByLeagueAndSeason(league: string, season: string): Promise<ITeamsRequest[] | false> {
    const key = Cookies.get("key");
    try {
      const { data: { response } } = await api.get("/teams" ,{
        headers: {
          "x-rapidapi-host": "v3.football.api-sports .io",
          "x-rapidapi-key": key
        },
        params: {
          league,
          season
        }
      });

      return response
    } catch (error) {
      return false
    }
  }

  async getStaticsTeams({league, season, team}: {league: string, season: string, team: string}): Promise<IStatiscsRequest | false> {
    const key = Cookies.get("key");
    try {
      const { data: { response } } = await api.get("/teams/statistics" ,{
        headers: {
          "x-rapidapi-host": "v3.football.api-sports .io",
          "x-rapidapi-key": key
        },
        params: {
          league,
          season,
          team
        }
      });

      return response
    } catch (error) {
      return false
    }
  }
}

export default new Teams();
