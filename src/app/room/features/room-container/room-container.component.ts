import { Component } from '@angular/core';
import {RoomFacade} from "../../store";
import {Card} from "../../../../model/card.model";

@Component({
  selector: 'duel-room-container',
  templateUrl: './room-container.component.html',
  styleUrls: ['./room-container.component.scss']
})
export class RoomContainerComponent {
  constructor(
    public roomFacade: RoomFacade,
  ) {}

  public joinRoom() {
    this.roomFacade.joinRoom('test', 'Christian');
  }

  public startGame() {
    this.roomFacade.sendMessage({
      type: 'START_GAME',
    })
  }

  public cardClicked(card: Card) {
    console.log('clicked', card);
    this.roomFacade.sendMessage({
      type: 'STAGE_CARD_CLICKED',
      card,
    })
  }
}
