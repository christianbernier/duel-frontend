import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {StoreModule} from "@ngrx/store";
import {homeReducer} from "./store/reducers";
import { HomeContainerComponent } from './features/home-container/home-container.component';
import {CreateRoomEffects} from "./store/effects/create-room.effects";
import {EffectsModule} from "@ngrx/effects";

@NgModule({
  declarations: [
    HomeContainerComponent
  ],
  exports: [
    HomeContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('home', {home: homeReducer}),
    EffectsModule.forFeature([CreateRoomEffects]),
  ]
})
export class HomeModule { }
