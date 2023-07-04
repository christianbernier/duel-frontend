import { Component, Input } from '@angular/core';
import { Resource } from '../../../../../model/resource.model';

@Component({
  selector: 'duel-resource-discount',
  templateUrl: './resource-discount.component.html',
  styleUrls: ['./resource-discount.component.scss'],
})
export class ResourceDiscountComponent {
  @Input() resource!: Resource;
  @Input() value!: number;
}
