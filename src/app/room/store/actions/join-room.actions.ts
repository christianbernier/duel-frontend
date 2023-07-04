import { createAction, props } from '@ngrx/store';

export const joinRoom = createAction(
  '[ROOM] Join Room',
  props<{ roomUid: string; name: string }>(),
);

export const joinRoomSuccess = createAction('[ROOM] Join Room Success');

export const joinRoomFailure = createAction(
  '[ROOM] Join Room Failure',
  props<{ error: string }>(),
);
