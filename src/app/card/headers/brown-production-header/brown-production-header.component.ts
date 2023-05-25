import {Component, Input} from '@angular/core';
import {BrownResource} from "../../../../model/resource.model";

@Component({
  selector: 'duel-brown-production-header',
  templateUrl: './brown-production-header.component.html',
  styleUrls: []
})
export class BrownProductionHeaderComponent {
  @Input() producesResources!: BrownResource[];
}
