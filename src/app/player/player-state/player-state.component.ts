import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {PlayerState} from "../../../model/player.model";

@Component({
  selector: 'duel-player-state',
  templateUrl: './player-state.component.html',
  styleUrls: ['./player-state.component.scss']
})
export class PlayerStateComponent implements OnChanges {
  @Input() state!: PlayerState;
  @Input() side!: 'LEFT' | 'RIGHT';

  public isOpen: boolean = false;

  public ngOnChanges(changes: SimpleChanges) {
    console.log(this.state);
  }

  public handleClose(): void {
    this.isOpen = false;
  }

  public handleOpen(): void {
    this.isOpen = true;
  }
}
