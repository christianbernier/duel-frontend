import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {RoomService} from "../../../shared/services/room/room.service";
import {catchError, concatMap, map, Observable, of, withLatestFrom} from "rxjs";
import {Action, select, Store} from "@ngrx/store";

import * as fromSelectors from '../selectors';
import * as fromActions from '../actions';
import {RoomFacade} from "../facades";
import {GameState} from "../../../../model/game.model";
import {ValidatorService} from "../../../shared/services/validator/validator.service";

@Injectable({
  providedIn: 'root',
})
export class ProcessMessageEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromSelectors.AppState>,
    private validatorService: ValidatorService,
    private roomFacade: RoomFacade,
  ) { }

  processMessage$ = createEffect(
    (): Observable<Action> =>
      { return this.actions$.pipe(
        ofType(fromActions.processMessage),
        map((action): Action => {
          try {
            if ('error' in action.message && typeof action.message.error === 'string') {
              return fromActions.updateServerError({
                error: action.message.error,
              });
            }
            ValidatorService.assertGameState(action.message);
          } catch (e) {
            throw new Error(`Failed to assert game state is valid. Error: ${e}`);
          }

          return fromActions.updateGameState({
            gameState: action.message,
          });
        }),
        catchError((error): Observable<Action> => of(fromActions.updateServerError({
            error: error.message,
          }))
        )
      )},
  );
}
