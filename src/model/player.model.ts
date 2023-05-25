import {Card} from "./card.model";
import {ScienceProgressToken} from "./science.model";

export type PlayerState = {
  player: 'A' | 'B',
  cards: Card[],
  coins: number,
  scienceTokens: ScienceProgressToken[],
  warLootingStatus: 0 | 2 | 5,
};
