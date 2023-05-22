import { ICountryCardProps } from "./countryCard.structure";

export default function CountryCard({country}: ICountryCardProps) {
  return (
    <button type="button" className=" flex flex-col gap-2 p-2 border rounded-2xl bg-blue-1 flex fle-col items-center hover:bg-black-1 hover:translate-y-1 hover:-translate-x-1 duration-300">
      <img className=" w-[200px] rounded-2xl" src={ country.flag } alt={ country.name } />
      <p>{`${country.name} - ${country.code}`}</p>
    </button>
  )
}