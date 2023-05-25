import {Component, Input} from '@angular/core';

@Component({
  selector: 'duel-broken-coin',
  templateUrl: './broken-coin.component.html',
  styleUrls: ['./broken-coin.component.scss', '../coins.scss']
})
export class BrokenCoinComponent {
  @Input() value!: number;
  @Input() size: 'LARGE' | 'SMALL' = 'LARGE';
}
