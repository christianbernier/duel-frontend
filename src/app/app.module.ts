import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CardModule} from "./card/card.module";
import {SharedModule} from "./shared/shared.module";
import { StoreModule } from '@ngrx/store';
import {RoomModule} from "./room/room.module";
import {roomReducer} from "./room/store/reducers/room.reducer";
import { EffectsModule } from '@ngrx/effects';
import { StringifyPipe } from './shared/pipes/stringify/stringify.pipe';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    SharedModule,
    RoomModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
