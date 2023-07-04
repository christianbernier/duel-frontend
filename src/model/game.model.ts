import { PlayerState } from './player.model';
import { ScienceProgressToken } from './science.model';
import { CardStage } from './card.model';

export type GameState =
  | {
      inProgress: false;
      playerA: null;
      playerB: null;
      turn: 'A';
      cardStage: CardStage;
      warStatus: number | 'A_VICTORY' | 'B_VICTORY';
      scienceTokens: (ScienceProgressToken | null)[];
    }
  | {
      // General
      inProgress: true;
      playerA: PlayerState;
      playerB: PlayerState;
      turn: 'A' | 'B';

      // Card Stage
      cardStage: CardStage;

      // War
      warStatus: number | 'A_VICTORY' | 'B_VICTORY';

      // Science
      scienceTokens: (ScienceProgressToken | null)[];
    };
