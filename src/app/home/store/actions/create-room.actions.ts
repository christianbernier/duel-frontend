import { createAction, props } from '@ngrx/store';
import { UUID } from '../../../../model/uuid';

export const createRoom = createAction('[HOME] Create Room');

export const createRoomSuccess = createAction(
  '[HOME] Create Room Success',
  props<{ uid: UUID }>(),
);

export const createRoomFailure = createAction(
  '[HOME] Create Room Failure',
  props<{ error: string }>(),
);
