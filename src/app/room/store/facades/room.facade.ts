import { Store } from '@ngrx/store';
import * as fromActions from '../actions';
import * as fromSelectors from '../selectors';
import { AppState } from '../selectors';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { GameState } from '../../../../model/game.model';

export interface IRoomFacade {
  roomUid$: Observable<string>;
  joinRoomError$: Observable<string>;
  serverError$: Observable<string | null>;
  gameState$: Observable<GameState | null>;

  readonly sendData$: Subject<object>;

  joinRoom(roomUid: string, name: string): void;
  processMessage(message: object): void;
  updateGameState(gameState: GameState): void;
  updateServerError(error: string): void;
}

@Injectable({
  providedIn: 'root',
})
export class RoomFacade implements IRoomFacade {
  roomUid$ = this.store.select(fromSelectors.getRoomUid);
  joinRoomError$ = this.store.select(fromSelectors.getJoinRoomError);
  serverError$ = this.store.select(fromSelectors.getServerError);
  gameState$ = this.store.select(fromSelectors.getGameState);

  readonly sendData$: Subject<object> = new Subject();

  constructor(private store: Store<AppState>) {}

  public joinRoom(roomUid: string, name: string): void {
    this.store.dispatch(
      fromActions.joinRoom({
        roomUid,
        name,
      }),
    );
  }

  public processMessage(message: object): void {
    this.store.dispatch(
      fromActions.processMessage({
        message,
      }),
    );
  }

  public updateGameState(gameState: GameState): void {
    this.store.dispatch(
      fromActions.updateGameState({
        gameState,
      }),
    );
  }

  public updateServerError(error: string): void {
    this.store.dispatch(
      fromActions.updateServerError({
        error,
      }),
    );
  }

  public sendMessage(message: object): void {
    this.sendData$.next(message);
  }
}
