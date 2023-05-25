import {Component, Input} from '@angular/core';
import {PurpleGuildCard} from "../../../../model/card.model";

@Component({
  selector: 'duel-purple-guild-header',
  templateUrl: './purple-guild-header.component.html',
  styleUrls: ['./purple-guild-header.component.scss']
})
export class PurpleGuildHeaderComponent {
  @Input() card!: PurpleGuildCard;
}
