import { ICountries } from "../Countries/countries.structure";

export interface ILeague {
  id: number;
  name: string;
  type: string;
  logo: string;
}

export interface ISeason {
  year: number;
  start: string;
  end: string;
  current: boolean;
}

export interface ILeaguesRequest {
  response: {
    league: ILeague;
    country: ICountries
    seasons: ISeason[]
  }[]
}