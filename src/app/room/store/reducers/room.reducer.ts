import * as fromActions from '../actions';
import { createReducer, on } from '@ngrx/store';
import { GameState } from '../../../../model/game.model';

export interface RoomState {
  roomUid: string;
  joinRoomError: string;
  serverError: string | null;
  gameState: GameState | null;
}

export const initialState: RoomState = {
  roomUid: '',
  joinRoomError: '',
  serverError: null,
  gameState: null,
};

export const roomReducer = createReducer(
  initialState,
  on(fromActions.joinRoom, (state, { roomUid }) => {
    return {
      ...state,
      roomUid,
    };
  }),
  on(fromActions.joinRoomSuccess, (state) => {
    return {
      ...state,
      joinRoomError: '',
    };
  }),
  on(fromActions.joinRoomFailure, (state, { error }) => {
    return {
      ...state,
      joinRoomError: error,
    };
  }),
  on(fromActions.updateServerError, (state, { error }) => {
    return {
      ...state,
      serverError: error,
    };
  }),
  on(fromActions.updateGameState, (state, { gameState }) => {
    return {
      ...state,
      serverError: null,
      gameState,
    };
  }),
);
