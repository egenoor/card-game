import { ICard, IPlayer } from './responseTypes'

export interface GameState {
  baseCard: ICard;
  playerInfo: IPlayer;
  errorMsg: string;
}