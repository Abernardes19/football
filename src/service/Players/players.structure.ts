export interface IPlayer {
  id: number;
  name: string;
  age: number;
  number: number;
  position: string;
  photo: string;
}

export interface IPlayersRequest {
  players: IPlayer[]
}