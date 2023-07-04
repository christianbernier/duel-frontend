import { Component, Input } from '@angular/core';
import { CardType } from '../../../../../model/card.model';

@Component({
  selector: 'duel-coins-for-card-type',
  templateUrl: './coins-for-card-type.component.html',
  styleUrls: ['./coins-for-card-type.component.scss'],
})
export class CoinsForCardTypeComponent {
  @Input() cardType!: CardType;
  @Input() value!: number;
}
