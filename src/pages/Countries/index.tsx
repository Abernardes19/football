import { useEffect, useState } from "react";
import { ICountries } from "../../service/Countries/countries.structure";
import CountriesClass from "../../service/Countries";
import Loading from "../../components/Loading";
import CountryCard from "../../components/CountryCard";

export default function Countries() {
  const [allCountries, setAllCountries] = useState([] as ICountries[]);
  const [loading, setLoading] = useState(true as boolean);
  const [search, setSearch] = useState("" as string);

  const getAllCountries = async () => {
    const data = await CountriesClass.getAllCoutries();

    if (data) {
      setAllCountries(data.response);
      setLoading(false);
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
  }

  useEffect(() => {
    getAllCountries()
  }, [])

  return (
    <div className=" w-screen h-screen bg-blue-1">
      <header className=" fixed top-0 w-full flex justify-center items-center border-b p-2 h-[80px] bg-black-1">
        <h1>Countries</h1>
      </header>
      <div className=" pt-[100px] w-full flex flex-col items-center gap-10 justify-center">
        <label className=" flex flex-col">
          País:
          <input className=" rounded-xl border bg-blue-1 p-2 w-[300px]" value={search} onChange={handleChange} />
        </label>
        <div className=" w-full flex flex-col items-center gap-5 justify-center sm:flex-row sm:flex-wrap">
          { loading ? (
            <Loading size="w-[100px]" />
          ) : (
            allCountries
              .filter((e) => e.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
              .map((e) => {
              return (
                <div key={e.name + e.code}>
                  <CountryCard country={e} />
                </div>
              )
            })
          ) }
        </div>
      </div>
    </div>
  )
}