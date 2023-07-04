import { Component, Input } from '@angular/core';
import { Card } from '../../../model/card.model';

@Component({
  selector: 'duel-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() card!: Card;
}
