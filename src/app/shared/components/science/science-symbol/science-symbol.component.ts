import { Component, Input } from '@angular/core';
import { ScienceType } from '../../../../../model/science.model';

@Component({
  selector: 'duel-science-symbol',
  templateUrl: './science-symbol.component.html',
  styleUrls: ['./science-symbol.component.scss'],
})
export class ScienceSymbolComponent {
  @Input() scienceType!: ScienceType;
}
