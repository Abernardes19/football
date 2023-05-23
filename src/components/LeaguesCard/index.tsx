import { useState } from "react";
import { ILeaguesRequest } from "../../service/Leagues/leagues.structure";

export default function LeaguesCard({ league }: { league: ILeaguesRequest }) {
  const [seasons, setSeasons] = useState(false as boolean);

  return (
    <div className="bg-black-1 border w-[200px] min-h-[220px]">
      <button type="button" className="flex flex-col items-center justify-center gap-2 w-full h-[220px]" onClick={() => setSeasons(!seasons)}>
        <p>{ league.league.type }</p>
        <img className=" w-[100px] rounded-full" src={ league.league.logo } alt={league.league.name} />
        <p>{ league.league.name }</p>
      </button>
      {
        seasons && (
          <div className=" w-full flex flex-wrap justify-center p-2 gap-2">
            <span className=" w-[80%] h-[2px] bg-white" />
            {
              league.seasons.map((e) => {
                return (
                  <button type="button" className=" border p-2">{e.year}</button>
                )
              })
            }
          </div>
        )
      }
    </div>
  )
}