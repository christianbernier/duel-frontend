import { Component, Input } from '@angular/core';
import { CardType } from '../../../../../model/card.model';

@Component({
  selector: 'duel-card-icon',
  templateUrl: './card-icon.component.html',
  styleUrls: ['./card-icon.component.scss'],
})
export class CardIconComponent {
  @Input() cardType!: CardType;
}
