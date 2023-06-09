import { ICountryCardProps } from "./countryCard.structure";
import { useNavigate } from "react-router-dom";

export default function CountryCard({country}: ICountryCardProps) {
  const navigate = useNavigate();

  const redirectLeague = () => {
    navigate(`/leagues/${country.name}`);
  }
  
  return (
    <button
      type="button"
      className=" flex flex-col gap-2 p-2 border rounded-2xl bg-blue-1 flex fle-col items-center hover:bg-black-1 hover:translate-y-1 hover:-translate-x-1 duration-300"
      onClick={() => redirectLeague()}
    >
      <img className=" w-[200px] rounded-2xl" src={ country.flag } alt={ country.name } />
      <p>{`${country.name} - ${country.code}`}</p>
    </button>
  )
}