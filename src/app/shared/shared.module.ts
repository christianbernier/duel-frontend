import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WoodComponent } from './components/resources/wood/wood.component';
import { StoneComponent } from './components/resources/stone/stone.component';
import {ClayComponent} from "./components/resources/clay/clay.component";
import { ResourceComponent } from './components/resources/resource.component';
import { GlassComponent } from './components/resources/glass/glass.component';
import { PapyrusComponent } from './components/resources/papyrus/papyrus.component';
import { ShieldComponent } from './components/army/shield/shield.component';
import { VictoryPointsComponent } from './components/victory/victory-points/victory-points.component';
import { ScienceSymbolComponent } from './components/science/science-symbol/science-symbol.component';
import { CoinSymbolComponent } from './components/coin/coin-symbol/coin-symbol.component';
import { CoinBadgeComponent } from './components/coin/coin-badge/coin-badge.component';
import { ResourceDiscountComponent } from './components/commercial/resource-discount/resource-discount.component';
import { AnyOfResourceTypeComponent } from './components/resources/any-of-resource-type/any-of-resource-type.component';
import { CardIconComponent } from './components/icons/card-icon/card-icon.component';
import { CoinsForCardTypeComponent } from './components/commercial/coins-for-card-type/coins-for-card-type.component';
import { CoinsForWonderComponent } from './components/commercial/coins-for-wonder/coins-for-wonder.component';
import { WonderIconComponent } from './components/icons/wonder-icon/wonder-icon.component';
import { DualArrowsIconComponent } from './components/icons/dual-arrows-icon/dual-arrows-icon.component';
import { VictoryPointsBadgeComponent } from './components/victory/victory-points-badge/victory-points-badge.component';
import { LinkSymbolComponent } from './components/links/link-symbol/link-symbol.component';
import { ScienceTokenComponent } from './components/science/science-token/science-token.component';
import { ScienceStageComponent } from './components/science/science-stage/science-stage.component';
import { LootingTokenComponent } from './components/army/looting-token/looting-token.component';
import { BrokenCoinComponent } from './components/coin/broken-coin/broken-coin.component';
import { ArmyStageComponent } from './components/army/army-stage/army-stage.component';
import {StringifyPipe} from "./pipes/stringify/stringify.pipe";

@NgModule({
  declarations: [
    WoodComponent,
    StoneComponent,
    ClayComponent,
    GlassComponent,
    PapyrusComponent,
    ResourceComponent,
    ShieldComponent,
    VictoryPointsComponent,
    ScienceSymbolComponent,
    CoinSymbolComponent,
    CoinBadgeComponent,
    ResourceDiscountComponent,
    AnyOfResourceTypeComponent,
    CardIconComponent,
    CoinsForCardTypeComponent,
    CoinsForWonderComponent,
    WonderIconComponent,
    DualArrowsIconComponent,
    VictoryPointsBadgeComponent,
    LinkSymbolComponent,
    ScienceTokenComponent,
    ScienceStageComponent,
    LootingTokenComponent,
    BrokenCoinComponent,
    ArmyStageComponent,
    StringifyPipe,
  ],
  exports: [
    WoodComponent,
    StoneComponent,
    ClayComponent,
    GlassComponent,
    PapyrusComponent,
    ResourceComponent,
    ShieldComponent,
    VictoryPointsComponent,
    ScienceSymbolComponent,
    CoinSymbolComponent,
    CoinBadgeComponent,
    ResourceDiscountComponent,
    AnyOfResourceTypeComponent,
    CoinsForCardTypeComponent,
    CoinsForWonderComponent,
    DualArrowsIconComponent,
    WonderIconComponent,
    CardIconComponent,
    VictoryPointsBadgeComponent,
    LinkSymbolComponent,
    ScienceTokenComponent,
    ScienceStageComponent,
    LootingTokenComponent,
    ArmyStageComponent,
    StringifyPipe,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
