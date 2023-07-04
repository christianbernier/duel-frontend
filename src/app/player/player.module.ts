import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerStateComponent } from './player-state/player-state.component';
import { PlayerCardsComponent } from './player-cards/player-cards.component';
import { CardModule } from '../card/card.module';
import { PlayerScienceTokensComponent } from './player-science-tokens/player-science-tokens.component';
import { SharedModule } from '../shared/shared.module';
import { PlayerCoinsComponent } from './player-coins/player-coins.component';
import { PlayerWondersComponent } from './player-wonders/player-wonders.component';
import { WonderModule } from '../wonder/wonder.module';
import { PlayerJoiningStateComponent } from './player-joining-state/player-joining-state.component';
import { NgIconComponent } from '@ng-icons/core';

@NgModule({
  declarations: [
    PlayerStateComponent,
    PlayerCardsComponent,
    PlayerScienceTokensComponent,
    PlayerCoinsComponent,
    PlayerWondersComponent,
    PlayerJoiningStateComponent,
  ],
  exports: [PlayerStateComponent, PlayerJoiningStateComponent],
  imports: [
    CommonModule,
    CardModule,
    SharedModule,
    WonderModule,
    NgIconComponent,
  ],
})
export class PlayerModule {}
