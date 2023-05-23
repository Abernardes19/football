export interface ITeam {
  id: number;
  name: string;
  code: string;
  country: string;
  founded: number;
  logo: string;
}

export interface ILineup {
  formation: string;
  played: number;
}

export interface ITeamsRequest {
  team: ITeam;
}

export interface IStaticsGame {
  home: number;
  away: number;
  total: number;
}

export interface IStatiscsRequest {
  team: {
    id: number;
    name: string;
    logo: string;
  },
  fixtures: {
    played: IStaticsGame;
    wins: IStaticsGame;
    loses: IStaticsGame;
    draws: IStaticsGame;
  },
  goals: {
    for: {
      total: IStaticsGame;
      average: IStaticsGame;
    },
    against: {
      total: IStaticsGame;
      average: IStaticsGame;  
    }
  },
  lineups: ILineup[]
}