import { Component, Input } from '@angular/core';
import { FlippedCardType } from '../../../model/card.model';

@Component({
  selector: 'duel-card-flipped',
  templateUrl: './card-flipped.component.html',
  styleUrls: ['./card-flipped.component.scss'],
})
export class CardFlippedComponent {
  @Input() type!: FlippedCardType;

  public get FlippedCardType() {
    return FlippedCardType;
  }
}
