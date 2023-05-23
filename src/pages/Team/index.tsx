import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import Loading from "../../components/Loading";
import Teams from "../../service/Teams";
import { IStatiscsRequest } from "../../service/Teams/teams.structure";

export default function Team() {
  const [loading, setLoading] = useState(true as boolean);
  const [statistic, setStatistic] = useState({} as IStatiscsRequest);
  const navigate = useNavigate();
  const { team, league, season } = useParams();

  const getStatics = async () => {
    const params = {
      league: league as string,
      season: season as string,
      team: team?.split("-")[0] as string
    }
    const data = await Teams.getStaticsTeams(params);

    if (data) {
      setStatistic(data);
      setLoading(false);
    }
  }

  return (
    <div className=" w-screen h-screen bg-blue-1">
      <header className=" fixed top-0 w-full flex justify-center items-center border-b p-2 h-[150px] bg-black-1 flex-col gap-2">
        <h1>{`Statistics - ${team?.split("-")[1]}`}</h1>
        <button type="button" onClick={() => navigate("/countries")} className="bg-blue-1 p-2 border rounded">Countries</button>
      </header>
      <div className=" pt-[200px] w-full flex flex-col items-start gap-10 justify-center sm:flex-row sm:flex-wrap pb-[50px] bg-blue-1">
      {
        loading ? (
          <Loading size="w-[100px]" />
        ) : (
          <div></div>
        )
      }
      </div>
    </div>
  )
}