import {Component, Input, OnInit} from '@angular/core';
import {BrownResource, GrayResource, Resource} from "../../../../../model/resource.model";

@Component({
  selector: 'duel-any-of-resource-type',
  templateUrl: './any-of-resource-type.component.html',
  styleUrls: ['./any-of-resource-type.component.scss']
})
export class AnyOfResourceTypeComponent implements OnInit {
  @Input() type!: 'BROWN' | 'GRAY';

  resourceSize: 'SMALL' | 'MEDIUM' | 'LARGE' = 'LARGE';
  resources: Resource[] = [];

  ngOnInit(): void {
    switch (this.type) {
      case 'BROWN':
        this.resources = Object.values(BrownResource);
        break;
      case 'GRAY':
        this.resources = Object.values(GrayResource);
        break;
    }
  }
}
