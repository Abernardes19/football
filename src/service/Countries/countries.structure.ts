export interface ICountries {
  name: string;
  code: string;
  flag: string;
}

export interface ICountriesRequest {
  errors: { token: string } | [];
  response: ICountries[]
}