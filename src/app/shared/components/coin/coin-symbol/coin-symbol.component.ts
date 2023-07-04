import { Component, Input } from '@angular/core';

@Component({
  selector: 'duel-coin-symbol',
  templateUrl: './coin-symbol.component.html',
  styleUrls: ['./coin-symbol.component.scss', '../coins.scss'],
})
export class CoinSymbolComponent {
  @Input() value!: number;
}
