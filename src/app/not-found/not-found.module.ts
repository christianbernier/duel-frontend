import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {NotFoundContainerComponent} from "./features/not-found-container/not-found-container.component";

@NgModule({
  declarations: [
    NotFoundContainerComponent
  ],
  exports: [
    NotFoundContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class NotFoundModule { }
