import {Component, Input} from '@angular/core';
import {Card} from "../../../model/card.model";

@Component({
  selector: 'duel-player-cards',
  templateUrl: './player-cards.component.html',
  styleUrls: ['./player-cards.component.scss']
})
export class PlayerCardsComponent {
  @Input() cards!: Card[];

  public get cardCategories(): Card[][] {
    const categories: Card[][] = [];

    this.cards.forEach((card: Card): void => {
      let categoryIndex = -1;

      categories.forEach((category: Card[], index: number): void => {
        if (category[0].cardType === card.cardType) {
          categoryIndex = index;
        }
      });

      if (categoryIndex === -1) {
        categories.push([card]);
      } else {
        categories[categoryIndex].push(card);
      }
    });

    return categories;
  }
}
