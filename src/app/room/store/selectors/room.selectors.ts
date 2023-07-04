import { RoomState } from '../reducers/room.reducer';
import { createSelector } from '@ngrx/store';
import { GameState } from '../../../../model/game.model';

export interface AppState {
  room: {
    room: RoomState;
  };
}

export const selectRoomState = (state: AppState) => state.room.room;

export const getRoomUid = createSelector(
  selectRoomState,
  (state: RoomState): string => state.roomUid,
);

export const getJoinRoomError = createSelector(
  selectRoomState,
  (state: RoomState): string => state.joinRoomError,
);

export const getServerError = createSelector(
  selectRoomState,
  (state: RoomState): string | null => state.serverError,
);

export const getGameState = createSelector(
  selectRoomState,
  (state: RoomState): GameState | null => state.gameState,
);
