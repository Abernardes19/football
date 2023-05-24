import { useNavigate, useParams } from "react-router-dom";
import { ITeam } from "../../service/Teams/teams.structure";

export default function TeamsCard({team}: {team: ITeam}) {
  const navigate = useNavigate();
  const { league, season } = useParams();

  return (
    <button
      type="button"
      className=" flex items-center gap-2 bg-black-1 p-3 border justify-center sm:min-w-[400px] min-h-[200px] rounded-2xl w-full"
      onClick={() => navigate(`/statistic/${team.id}-${team.name}/${league}/${season}`)}
    >
      <img className=" w-[100px]" src={team.logo} alt={team.name} />
      <p>{`${team.name} - ${team.code}`}</p>
    </button>
  )
}