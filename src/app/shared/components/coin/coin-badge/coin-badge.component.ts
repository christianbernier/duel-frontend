import {Component, Input} from '@angular/core';
@Component({
  selector: 'duel-coin-badge',
  templateUrl: './coin-badge.component.html',
  styleUrls: ['./coin-badge.component.scss', '../coins.scss']
})
export class CoinBadgeComponent {
  @Input() value!: number;
  @Input() size!: 'SMALL' | 'LARGE';
}
