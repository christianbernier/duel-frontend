import {PlayerState} from "./player.model";
import {ScienceProgressToken} from "./science.model";
import {CardStage} from "./card.model";

export type GameState = {
  // General
  inProgress: boolean;
  playerA: PlayerState | null;
  playerB: PlayerState | null;
  turn: 'A' | 'B';

  // Card Stage
  cardStage: CardStage;

  // War
  warStatus: number | 'A_VICTORY' | 'B_VICTORY';

  // Science
  scienceTokens: (ScienceProgressToken | null)[];

  // Other
}
