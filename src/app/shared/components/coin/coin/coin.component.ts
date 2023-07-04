import { Component, Input } from '@angular/core';

@Component({
  selector: 'duel-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss'],
})
export class CoinComponent {
  @Input() amount!: 1 | 3 | 6;
  @Input() size!: 'SMALL' | 'LARGE';
}
