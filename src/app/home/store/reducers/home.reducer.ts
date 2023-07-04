import * as fromActions from '../actions';
import {createReducer, on} from "@ngrx/store";

export interface HomeState {
  roomUid: string;
  createRoomError: string | null;
}

export const initialState: HomeState = {
  roomUid: '',
  createRoomError: null,
}

export const homeReducer = createReducer(
  initialState,
  on(fromActions.createRoom, (state) => {
    return {
      ...state,
      roomUid: '',
      createRoomError: null,
    }
  }),
  on(fromActions.createRoomSuccess, (state, { uid }) => {
    return {
      ...state,
      roomUid: uid,
      createRoomError: null,
    }
  }),
  on(fromActions.createRoomFailure, (state, { error }) => {
    return {
      ...state,
      roomUid: '',
      createRoomError: error,
    }
  }),
);
