import {Component, Input} from '@angular/core';
import {Wonder} from "../../../model/wonder.model";

@Component({
  selector: 'duel-player-wonders',
  templateUrl: './player-wonders.component.html',
  styleUrls: ['./player-wonders.component.scss']
})
export class PlayerWondersComponent {
  @Input() wonders!: Wonder[];
}
