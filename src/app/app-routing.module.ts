import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeContainerComponent} from "./home/features/home-container/home-container.component";
import {RoomContainerComponent} from "./room/features/room-container/room-container.component";
import {NotFoundContainerComponent} from "./not-found/features/not-found-container/not-found-container.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeContainerComponent,
  },
  {
    path: 'play/:uid',
    component: RoomContainerComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundContainerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
