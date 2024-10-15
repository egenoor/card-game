export interface NewGameResponse {
  baseCard: ICard;
  player: IPlayer;
}

export interface IPlayer {
  name: string;
  lives: number;
  score: number;
}

export interface ICard {
  suit: string;
  rank: string;
  value: number;
}