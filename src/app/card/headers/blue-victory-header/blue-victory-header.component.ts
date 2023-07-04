import { Component, Input } from '@angular/core';

@Component({
  selector: 'duel-blue-victory-header',
  templateUrl: './blue-victory-header.component.html',
  styleUrls: [],
})
export class BlueVictoryHeaderComponent {
  @Input() points!: number;
}
