import {Component, Input} from '@angular/core';

@Component({
  selector: 'duel-looting-token',
  templateUrl: './looting-token.component.html',
  styleUrls: ['./looting-token.component.scss']
})
export class LootingTokenComponent {
  @Input() value!: 2 | 5;
  @Input() size: 'SMALL' | 'LARGE' = 'LARGE';
}
