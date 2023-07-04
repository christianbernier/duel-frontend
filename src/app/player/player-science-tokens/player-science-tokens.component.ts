import { Component, Input } from '@angular/core';
import { ScienceProgressToken } from '../../../model/science.model';

@Component({
  selector: 'duel-player-science-tokens',
  templateUrl: './player-science-tokens.component.html',
  styleUrls: ['./player-science-tokens.component.scss'],
})
export class PlayerScienceTokensComponent {
  @Input() tokens!: ScienceProgressToken[];
}
