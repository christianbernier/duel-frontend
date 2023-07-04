import { Component, Input } from '@angular/core';
import { PlayerState } from '../../../model/player.model';

@Component({
  selector: 'duel-player-state',
  templateUrl: './player-state.component.html',
  styleUrls: ['./player-state.component.scss'],
})
export class PlayerStateComponent {
  @Input() state!: PlayerState;
  @Input() side!: 'LEFT' | 'RIGHT';

  public isOpen = false;

  public handleClose(): void {
    this.isOpen = false;
  }

  public handleOpen(): void {
    this.isOpen = true;
  }
}
