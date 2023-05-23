import { useEffect, useState } from "react"
import LeaguesCard from "../../components/LeaguesCard";
import { ILeaguesRequest } from "../../service/Leagues/leagues.structure";
import LeaguesClass from "../../service/Leagues";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading";

export default function Leagues() {
  const [allLeagues, setAllLeagues] = useState([] as ILeaguesRequest[]);
  const [loading, setLoading] = useState(true as boolean);
  const navigate = useNavigate();
  const { country } = useParams();

  const getLeagues = async () => {
    const data = await LeaguesClass.getLeagues(country as string);

    if (data) {
      setAllLeagues(data);
    }
    setLoading(false)
  }

  useEffect(() => {
    getLeagues();
  },[])

  return (
    <div className=" w-screen h-screen bg-blue-1">
      <header className=" fixed top-0 w-full flex justify-center items-center border-b p-2 h-[150px] bg-black-1 flex-col gap-2">
        <h1>{`Leagues - ${country}`}</h1>
        <button type="button" onClick={() => navigate("/countries")} className="bg-blue-1 p-2 border rounded">Countries</button>
      </header>
      <div className=" pt-[200px] w-full flex flex-col items-start gap-10 justify-center sm:flex-row sm:flex-wrap pb-[50px] bg-blue-1">
      {
        loading ? (
          <Loading size="w-[100px]" />
        ) : (
          allLeagues.map((e) => {
            return (
              <div key={e.league.id}>
                <LeaguesCard league={e} />
              </div>
            )
          })
        )
      }
      </div>
    </div>
  )
}