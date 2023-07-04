import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { BrownProductionHeaderComponent } from './headers/brown-production-header/brown-production-header.component';
import { SharedModule } from '../shared/shared.module';
import { GrayProductionHeaderComponent } from './headers/gray-production-header/gray-production-header.component';
import { RedArmyHeaderComponent } from './headers/red-army-header/red-army-header.component';
import { BlueVictoryHeaderComponent } from './headers/blue-victory-header/blue-victory-header.component';
import { GreenScienceHeaderComponent } from './headers/green-science-header/green-science-header.component';
import { YellowCommercialHeaderComponent } from './headers/yellow-commercial-header/yellow-commercial-header.component';
import { PurpleGuildHeaderComponent } from './headers/purple-guild-header/purple-guild-header.component';
import { CardFlippedComponent } from './card-flipped/card-flipped.component';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import { CardStageComponent } from './card-stage/card-stage.component';

@NgModule({
  declarations: [
    CardComponent,
    BrownProductionHeaderComponent,
    GrayProductionHeaderComponent,
    RedArmyHeaderComponent,
    BlueVictoryHeaderComponent,
    GreenScienceHeaderComponent,
    YellowCommercialHeaderComponent,
    PurpleGuildHeaderComponent,
    CardFlippedComponent,
    CardPaymentComponent,
    CardStageComponent,
  ],
  exports: [CardComponent, CardFlippedComponent, CardStageComponent],
  imports: [CommonModule, SharedModule],
})
export class CardModule {}
