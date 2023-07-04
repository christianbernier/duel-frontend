import {Card} from "./card.model";
import {ScienceProgressToken} from "./science.model";
import {Wonder} from "./wonder.model";

export type PlayerState = {
  player: 'A' | 'B',
  name: string,
  cards: Card[],
  coins: number,
  scienceTokens: ScienceProgressToken[],
  wonders: Wonder[],
  warLootingStatus: 0 | 2 | 5,
};
