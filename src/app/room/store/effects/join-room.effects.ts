import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {RoomService} from "../../../shared/services/room/room.service";
import {catchError, concatMap, map, Observable, of, withLatestFrom} from "rxjs";
import {Action, select, Store} from "@ngrx/store";

import * as fromSelectors from '../selectors';
import * as fromActions from '../actions';
import {RoomFacade} from "../facades";

@Injectable({
  providedIn: 'root',
})
export class JoinRoomEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromSelectors.AppState>,
    private roomService: RoomService,
    private roomFacade: RoomFacade,
  ) { }

  joinRoom$ = createEffect(
    (): Observable<Action> =>
      { return this.actions$.pipe(
        ofType(fromActions.joinRoom),
        concatMap(action => of(action).pipe(
          withLatestFrom(
            this.store.pipe(select(fromSelectors.getRoomUid))
          )
        )),
        map(([action, roomUid]): Action => {
          this.roomService.joinRoom(
            roomUid,
            action.name,
            (message: object) => this.roomFacade.processMessage(message),
            (error: Error): void => this.roomFacade.updateServerError(error.message),
            this.roomFacade.sendData$
          );

          return fromActions.joinRoomSuccess();
        }),
        catchError((error): Observable<Action> => of(fromActions.joinRoomFailure({
            error: error.message,
          }))
        )
      ) },
  );
}
