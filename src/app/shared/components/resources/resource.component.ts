import { Component, Input } from '@angular/core';
import { Resource } from '../../../../model/resource.model';

@Component({
  selector: 'duel-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resources.scss'],
})
export class ResourceComponent {
  @Input() resource!: Resource;
  @Input() size: 'SMALL' | 'MEDIUM' | 'LARGE' = 'LARGE';
}
