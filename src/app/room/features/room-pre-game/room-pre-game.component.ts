import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GameState} from "../../../../model/game.model";

@Component({
  selector: 'duel-room-pre-game',
  templateUrl: './room-pre-game.component.html',
  styleUrls: ['./room-pre-game.component.scss']
})
export class RoomPreGameComponent {
  @Input() gameState!: GameState | null;
  @Output() onStart: EventEmitter<void>;

  public constructor() {
    this.onStart = new EventEmitter();
  }

  public get canStart(): boolean {
    return !!this.gameState?.playerA && !!this.gameState?.playerB;
  }
}
