import { IPlayer } from "../../service/Players/players.structure";

export default function PlayerCard({ player }: { player: IPlayer }) {
  return (
    <div className=" bg-gray-1 flex items-center gap-2 p-2 rounded-2xl sm:min-w-[400px]">
      <img className=" w-[80px] rounded-full" src={ player.photo } alt={player.name} />
      <p className=" break-all text-black-1">{`${player.name} - ${player.age} years - ${player.nationality}`}</p>
    </div>
  )
}