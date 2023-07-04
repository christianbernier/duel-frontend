import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Card, CardStage, FlippedCardType} from "../../../model/card.model";

@Component({
  selector: 'duel-card-stage',
  templateUrl: './card-stage.component.html',
  styleUrls: ['./card-stage.component.scss']
})
export class CardStageComponent {
  @Input() cards!: CardStage;
  @Output() clicked: EventEmitter<Card>;

  constructor() {
    this.clicked = new EventEmitter();
  }

  public cardClicked(card: Card) {
    console.log(card)
    this.clicked.next(card);
  }
}
