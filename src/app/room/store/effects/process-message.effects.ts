import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';

import * as fromActions from '../actions';
import { ValidatorService } from '../../../shared/services/validator/validator.service';

@Injectable({
  providedIn: 'root',
})
export class ProcessMessageEffects {
  constructor(private actions$: Actions) {}

  processMessage$ = createEffect((): Observable<Action> => {
    return this.actions$.pipe(
      ofType(fromActions.processMessage),
      map((action): Action => {
        console.log('received', action.message);
        try {
          // Error messages have 'error' as one of the fields
          if (
            'error' in action.message &&
            typeof action.message.error === 'string'
          ) {
            return fromActions.updateServerError({
              error: action.message.error,
            });
          }

          // Otherwise, assume it is game state
          ValidatorService.assertGameState(action.message);
        } catch (e) {
          console.log(e);
          throw new Error(`Failed to assert game state is valid. Error: ${e}`);
        }

        return fromActions.updateGameState({
          gameState: action.message,
        });
      }),
      catchError(
        (error): Observable<Action> =>
          of(
            fromActions.updateServerError({
              error: error.message,
            }),
          ),
      ),
    );
  });
}
