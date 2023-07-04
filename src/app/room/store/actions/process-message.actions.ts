import { createAction, props } from '@ngrx/store';
import { GameState } from '../../../../model/game.model';

export const processMessage = createAction(
  '[ROOM] Process Message',
  props<{ message: object }>(),
);

export const updateGameState = createAction(
  '[ROOM] Update Game State',
  props<{ gameState: GameState }>(),
);

export const updateServerError = createAction(
  '[ROOM] Update Server Error',
  props<{ error: string }>(),
);
