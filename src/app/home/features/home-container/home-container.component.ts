import { Component } from '@angular/core';
import { HomeFacade } from '../../store';

@Component({
  selector: 'duel-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
})
export class HomeContainerComponent {
  constructor(public homeFacade: HomeFacade) {}

  public createRoom() {
    this.homeFacade.createRoom();
  }
}
