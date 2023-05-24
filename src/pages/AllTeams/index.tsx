import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Loading from "../../components/Loading"
import TeamsCard from "../../components/TeamsCard";
import Teams from "../../service/Teams";
import { ITeam } from "../../service/Teams/teams.structure";

export default function AllTeams() {
  const [loading, setLoading] = useState(true as boolean);
  const [teams, setTeams] = useState([] as ITeam[])
  const navigate = useNavigate();
  const { league, season } = useParams();

  const getAllTeams = async () => {
    const data = await Teams.getTeamsByLeagueAndSeason(league?.split("-")[0] as string, season as string);

    if (data) {
      setTeams(data.map((e) => e.team));
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllTeams();
  }, [])

  return (
    <div className=" w-screen h-screen bg-blue-1">
      <header className=" fixed top-0 w-full flex justify-center items-center border-b p-2 sm:h-[150px] bg-black-1 flex-col gap-2">
        <h1 className=" text-center">{`Teams - ${league?.split("-")[1]} - ${season}`}</h1>
        <button type="button" onClick={() => navigate("/countries")} className="bg-blue-1 p-2 border rounded">Countries</button>
      </header>
      <div className=" pt-[200px] w-screen flex flex-col items-center gap-10 justify-center sm:flex-row sm:flex-wrap pb-[50px] bg-blue-1">
      {
        loading ? (
          <Loading size="w-[100px]" />
        ) : (
          <div className=" w-[90%] flex flex-col gap-5 sm:flex-row sm:flex-wrap">
            {
              teams.map((e) => {
                return (
                  <div>
                    <TeamsCard team={e} />
                  </div>
                )
              })
            }
          </div>
        )
      }
      </div>
    </div>
  )
}