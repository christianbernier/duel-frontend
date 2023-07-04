import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {CardModule} from "../card/card.module";
import {StoreModule} from "@ngrx/store";
import {roomReducer} from "./store/reducers";
import {EffectsModule} from "@ngrx/effects";
import {JoinRoomEffects, ProcessMessageEffects} from "./store/effects";
import { RoomContainerComponent } from './features/room-container/room-container.component';
import {PlayerModule} from "../player/player.module";
import { RoomUidLabelComponent } from './features/room-uid-label/room-uid-label.component';
import {NgIconComponent} from "@ng-icons/core";
import { RoomPreGameComponent } from './features/room-pre-game/room-pre-game.component';
import { RoomGameInProgressComponent } from './features/room-game-in-progress/room-game-in-progress.component';

@NgModule({
  declarations: [
    RoomContainerComponent,
    RoomUidLabelComponent,
    RoomPreGameComponent,
    RoomGameInProgressComponent
  ],
  exports: [
    RoomContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CardModule,
    StoreModule.forFeature('room', {room: roomReducer}),
    EffectsModule.forFeature([JoinRoomEffects, ProcessMessageEffects]),
    PlayerModule,
    NgIconComponent,
  ]
})
export class RoomModule { }
