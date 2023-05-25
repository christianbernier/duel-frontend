import {Component, Input} from '@angular/core';
import {ScienceProgressToken} from "../../../../../model/science.model";

@Component({
  selector: 'duel-science-stage',
  templateUrl: './science-stage.component.html',
  styleUrls: ['./science-stage.component.scss']
})
export class ScienceStageComponent {
  @Input() tokens!: (ScienceProgressToken | null)[];
}
