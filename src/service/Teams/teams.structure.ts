export interface ITeam {
  id: number;
  name: string;
  code: string;
  country: string;
  founded: number;
  logo: string;
}

export interface ITeamsRequest {
  team: ITeam;
}