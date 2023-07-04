import { Component, Input } from '@angular/core';
import { ScienceType } from '../../../../model/science.model';

@Component({
  selector: 'duel-green-science-header',
  templateUrl: './green-science-header.component.html',
  styleUrls: [],
})
export class GreenScienceHeaderComponent {
  @Input() scienceType!: ScienceType;
  @Input() victoryPoints!: number;
}
