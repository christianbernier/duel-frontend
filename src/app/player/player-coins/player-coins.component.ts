import {Component, Input} from '@angular/core';

@Component({
  selector: 'duel-player-coins',
  templateUrl: './player-coins.component.html',
  styleUrls: ['./player-coins.component.scss']
})
export class PlayerCoinsComponent {
  @Input() coins!: number;

  public get coinTypes(): (1 | 3 | 6)[] {
    const types: (1 | 3 | 6)[] = [];

    let coinsLeft = this.coins;
    while (coinsLeft > 0) {
      let amount: 1 | 3 | 6 = 1;

      if (coinsLeft > 6) {
        amount = 6;
      } else if (coinsLeft > 3) {
        amount = 3;
      }

      coinsLeft -= amount;
      types.push(amount);
    }

    return types;
  }
}
