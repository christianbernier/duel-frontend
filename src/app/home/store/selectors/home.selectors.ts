import { HomeState } from '../reducers/home.reducer';
import { createSelector } from '@ngrx/store';

export interface AppState {
  home: HomeState;
}

export const selectHomeState = (state: AppState) => state.home;

export const getRoomUid = createSelector(
  selectHomeState,
  (state: HomeState): string => state.roomUid,
);

export const getCreateRoomError = createSelector(
  selectHomeState,
  (state: HomeState): string | null => state.createRoomError,
);
