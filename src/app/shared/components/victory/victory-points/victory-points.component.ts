import { Component, Input } from '@angular/core';

@Component({
  selector: 'duel-victory-points',
  templateUrl: './victory-points.component.html',
  styleUrls: ['./victory-points.component.scss'],
})
export class VictoryPointsComponent {
  @Input() number!: number;
}
