import {Component, Input} from '@angular/core';
import {GameState} from "../../../../model/game.model";
import {Card} from "../../../../model/card.model";
import {RoomFacade} from "../../store";

@Component({
  selector: 'duel-room-game-in-progress',
  templateUrl: './room-game-in-progress.component.html',
  styleUrls: ['./room-game-in-progress.component.scss']
})
export class RoomGameInProgressComponent {
  @Input() gameState!: GameState;

  public constructor(
    private roomFacade: RoomFacade,
  ) { }

  public get playerUpName(): string {
    if (this.gameState.turn === 'A') {
      return this.gameState.playerA!.name;
    } else {
      return this.gameState.playerB!.name;
    }
  }

  public cardClicked(card: Card) {
    this.roomFacade.sendMessage({
      type: 'STAGE_CARD_CLICKED',
      card,
    })
  }
}
