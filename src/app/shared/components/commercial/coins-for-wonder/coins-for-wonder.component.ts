import { Component, Input } from '@angular/core';

@Component({
  selector: 'duel-coins-for-wonder',
  templateUrl: './coins-for-wonder.component.html',
  styleUrls: ['./coins-for-wonder.component.scss'],
})
export class CoinsForWonderComponent {
  @Input() value!: number;
}
