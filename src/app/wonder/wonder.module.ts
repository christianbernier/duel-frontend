import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {WonderCardComponent} from "./wonder-card/wonder-card.component";
import {CardModule} from "../card/card.module";



@NgModule({
  declarations: [
    WonderCardComponent,
  ],
  exports: [
    WonderCardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CardModule
  ]
})
export class WonderModule { }
