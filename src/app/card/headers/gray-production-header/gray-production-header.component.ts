import {Component, Input} from '@angular/core';
import {GrayResource} from "../../../../model/resource.model";

@Component({
  selector: 'duel-gray-production-header',
  templateUrl: './gray-production-header.component.html',
  styleUrls: []
})
export class GrayProductionHeaderComponent {
  @Input() producesResources!: GrayResource[];
}
