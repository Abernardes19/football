import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import Graphic from "../../components/Graphic";
import Loading from "../../components/Loading";
import PlayerCard from "../../components/PlayerCard";
import Table from "../../components/Table";
import Players from "../../service/Players";
import { IPlayersRequest } from "../../service/Players/players.structure";
import Teams from "../../service/Teams";
import { ILineup, IStatiscsRequest } from "../../service/Teams/teams.structure";

const min = {
  "0-15": {
      "total": 10,
      "percentage": "17.24%"
  },
  "16-30": {
      "total": 9,
      "percentage": "15.52%"
  },
  "31-45": {
      "total": 9,
      "percentage": "15.52%"
  },
  "46-60": {
      "total": 9,
      "percentage": "15.52%"
  },
  "61-75": {
      "total": 8,
      "percentage": "13.79%"
  },
  "76-90": {
      "total": 5,
      "percentage": "8.62%"
  },
  "91-105": {
      "total": 8,
      "percentage": "13.79%"
  },
  "106-120": {
      "total": null,
      "percentage": null
  }
}

export default function Team() {
  const [loading, setLoading] = useState(true as boolean);
  const [statistic, setStatistic] = useState({} as IStatiscsRequest);
  const [players, setPlayers] = useState([] as IPlayersRequest[]);
  const [formation, setFormatio] = useState({} as ILineup)
  const navigate = useNavigate();
  const { team, league, season } = useParams();

  const getStatics = async () => {
    const params = {
      league: league?.split("-")[0] as string,
      season: season as string,
      team: team?.split("-")[0] as string
    }

    const statistics = await Teams.getStaticsTeams(params)
    const playersTeam = await Players.getPlayersByTeam(team?.split("-")[0] as string, season as string);

    if (statistics && playersTeam) {
      setStatistic(statistics);
      setPlayers(playersTeam);
      setFormatio(statistics.lineups.sort((a, b) => b.played - a.played)[0]);
      setLoading(false);
    }
    setLoading(false)

  }

  useEffect(() => {
    getStatics()
  }, [])

  return (
    <div className=" w-screen h-screen bg-blue-1">
      <header className=" fixed top-0 w-full flex justify-center items-center border-b p-2 sm:h-[150px] bg-black-1 flex-col gap-2">
        <h1 className=" text-center">{`Statistics - ${team?.split("-")[1]} - ${season}`}</h1>
        <button type="button" onClick={() => navigate("/countries")} className="bg-blue-1 p-2 border rounded">Countries</button>
      </header>
      <div className=" pt-[200px] w-full flex flex-col items-start gap-10 justify-center sm:flex-row sm:flex-wrap pb-[50px] bg-blue-1">
      {
        loading ? (
          <Loading size="w-[100px]" />
        ) : (
          <div className=" flex flex-col items-center">
            <div>
              <Table statistic={statistic} />
            </div>
            <div className=" my-10">
              <p className=" bg-gray-1 p-2 text-black-1 rounded-2xl">{`Formation ${formation.formation} - ${formation.played} times`}</p>
            </div>
            <div className=" mt-10 w-screen flex flex-col gap-2 w-[90%] sm:flex-row sm:flex-wrap">
              {
                players.map((e) => {
                  return (
                    <div key={e.player.id}>
                      <PlayerCard player={e.player} />
                    </div>
                  )
                })
              }
            </div>
            <div className=" mt-10">
              <Graphic minutes={min} />
            </div>
          </div> 
        )
      }
      </div>
    </div>
  )
}

{/* <div>
            <div>
              <Table statistic={statistic} />
            </div>
            <div>
              {
                players.map((e) => {
                  return (
                    <div key={e.player.id}>
                      <PlayerCard player={e.player} />
                    </div>
                  )
                })
              }
            </div>
          </div> */}

          