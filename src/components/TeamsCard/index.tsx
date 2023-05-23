import { ITeam } from "../../service/Teams/teams.structure";

export default function TeamsCard({team}: {team: ITeam}) {
  return (
    <button type="button" className=" flex items-center gap-2 bg-black-1 p-3 border justify-center min-w-[300px] min-h-[200px] rounded-2xl">
      <img className=" w-[100px]" src={team.logo} alt={team.name} />
      <p>{`${team.name} - ${team.code}`}</p>
    </button>
  )
}