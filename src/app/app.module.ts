import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from './card/card.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { RoomModule } from './room/room.module';
import { EffectsModule } from '@ngrx/effects';
import { WonderModule } from './wonder/wonder.module';
import { HomeModule } from './home/home.module';
import { NotFoundModule } from './not-found/not-found.module';
import { heroPlusCircle, heroXMark } from '@ng-icons/heroicons/outline';
import { NgIconsModule } from '@ng-icons/core';
import {
  heroQuestionMarkCircleSolid,
  heroUserCircleSolid,
} from '@ng-icons/heroicons/solid';
import {
  heroCheckMini,
  heroDocumentDuplicateMini,
} from '@ng-icons/heroicons/mini';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    SharedModule,
    RoomModule,
    HomeModule,
    NotFoundModule,
    WonderModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    NgIconsModule.withIcons({
      heroPlusCircle,
      heroXMark,
      heroUserCircleSolid,
      heroQuestionMarkCircleSolid,
      heroDocumentDuplicateMini,
      heroCheckMini,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
