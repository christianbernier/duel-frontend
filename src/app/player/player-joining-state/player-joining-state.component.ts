import {Component, Input} from '@angular/core';

@Component({
  selector: 'duel-player-joining-state',
  templateUrl: './player-joining-state.component.html',
  styleUrls: ['./player-joining-state.component.scss']
})
export class PlayerJoiningStateComponent {
  @Input() joined!: boolean;
  @Input() name?: string;
}
