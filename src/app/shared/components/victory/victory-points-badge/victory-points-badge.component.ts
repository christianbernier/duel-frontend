import {Component, Input} from '@angular/core';

@Component({
  selector: 'duel-victory-points-badge',
  templateUrl: './victory-points-badge.component.html',
  styleUrls: ['./victory-points-badge.component.scss']
})
export class VictoryPointsBadgeComponent {
  @Input() value!: number;
}
