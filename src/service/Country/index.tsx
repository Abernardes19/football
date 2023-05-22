import api from "../Api/api";

class Countries {
  async getAllCoutries(key: string) {
    try {
      const { data } = await api.get("/countries", {
        headers: {
          "x-rapidapi-host":  "v3.football.api-sports .io",
          "x-rapidapi-key":  key
        }
      });

      return data
    } catch (error) {
      return false
    }
  }
}

export default new Countries();
