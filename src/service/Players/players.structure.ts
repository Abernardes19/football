export interface IPlayer {
  id: number;
  name: string;
  age: number;
  number: number;
  position: string;
  photo: string;
  nationality: string;
}

export interface IPlayersRequest {
  player: IPlayer
}