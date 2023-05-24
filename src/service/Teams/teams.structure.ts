export interface ITeam {
  id: number;
  name: string;
  code: string;
  country: string;
  founded: number;
  logo: string;
}

export interface IMinuteKeys {
  total: number | null;
  percentage: string | null;
}

export interface IMinute {
  "0-15": IMinuteKeys,
  "16-30": IMinuteKeys,
  "31-45": IMinuteKeys,
  "46-60": IMinuteKeys,
  "61-75": IMinuteKeys,
  "76-90": IMinuteKeys,
  "91-105": IMinuteKeys,
  "106-120": IMinuteKeys
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
      minute: IMinute;
    },
    against: {
      total: IStaticsGame;
      average: IStaticsGame;
      minute: IMinute;
    }
  },
  lineups: ILineup[]
}