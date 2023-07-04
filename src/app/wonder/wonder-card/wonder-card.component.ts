import { Component, Input } from '@angular/core';
import { WonderType } from '../../../model/wonder.model';
import { Resource } from '../../../model/resource.model';
import { FlippedCardType } from '../../../model/card.model';

@Component({
  selector: 'duel-wonder-card',
  templateUrl: './wonder-card.component.html',
  styleUrls: ['./wonder-card.component.scss'],
})
export class WonderCardComponent {
  @Input() type!: WonderType;
  @Input() resourceCost!: Resource[];
  @Input() claimedWith: FlippedCardType | null = null;
  @Input() disabled?: boolean = false;

  public get imagePath(): string {
    return `assets/wonder/${this.type.toLowerCase()}.png`;
  }
}
