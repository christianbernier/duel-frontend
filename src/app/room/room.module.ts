import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {CardModule} from "../card/card.module";
import {StoreModule} from "@ngrx/store";
import {roomReducer} from "./store/reducers";
import {EffectsModule} from "@ngrx/effects";
import {JoinRoomEffects, ProcessMessageEffects} from "./store/effects";
import { RoomContainerComponent } from './features/room-container/room-container.component';

@NgModule({
  declarations: [
    RoomContainerComponent
  ],
  exports: [
    RoomContainerComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    CardModule,
    StoreModule.forRoot({ room: roomReducer}),
    EffectsModule.forRoot([JoinRoomEffects, ProcessMessageEffects]),
    // EffectsModule.forRoot([]),
  ]
})
export class RoomModule { }
