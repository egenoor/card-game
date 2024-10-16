export interface NewGameResponse {
  baseCard: ICard;
  player: IPlayer;
  errorMsg: string;
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

export interface NewRoundResponse {
  nextCard: ICard;
  player: IPlayer;
  errorMsg: string;
}