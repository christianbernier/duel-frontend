import {Store} from "@ngrx/store";
import * as fromActions from '../actions';
import {AppState} from "../selectors";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import * as fromSelectors from "../selectors";

export interface IHomeFacade {
  roomUid$: Observable<string>;
  createRoomError$: Observable<string | null>;

  createRoom(): void;
}

@Injectable({
  providedIn: 'root',
})
export class HomeFacade implements IHomeFacade {
  roomUid$ = this.store.select(fromSelectors.getRoomUid);
  createRoomError$ = this.store.select(fromSelectors.getCreateRoomError);

  constructor(
    private store: Store<AppState>,
  ) {}

  public createRoom(): void {
    this.store.dispatch(fromActions.createRoom());
  }
}
