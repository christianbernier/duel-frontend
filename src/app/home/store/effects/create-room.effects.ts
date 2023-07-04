import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RoomService } from '../../../shared/services/room/room.service';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';

import * as fromActions from '../actions';
import { NavigationService } from '../../../shared/services/navigation/navigation.service';

@Injectable({
  providedIn: 'root',
})
export class CreateRoomEffects {
  constructor(
    private actions$: Actions,
    private roomService: RoomService,
    private navigationService: NavigationService,
  ) {}

  createRoom$ = createEffect((): Observable<Action> => {
    return this.actions$.pipe(
      ofType(fromActions.createRoom),
      mergeMap((): Observable<Action> => {
        return this.roomService.createRoom().pipe(
          map((uid: string) => {
            this.navigationService.goTo(`/play/${uid}`);
            return fromActions.createRoomSuccess({ uid });
          }),
        );
      }),
      catchError((error): Observable<Action> => {
        return of(
          fromActions.createRoomFailure({
            error: error.message,
          }),
        );
      }),
    );
  });
}
