import { Component, Input } from '@angular/core';
import { YellowCommercialCard } from '../../../../model/card.model';

@Component({
  selector: 'duel-yellow-commercial-header',
  templateUrl: './yellow-commercial-header.component.html',
  styleUrls: ['./yellow-commercial-header.component.scss'],
})
export class YellowCommercialHeaderComponent {
  @Input() card!: YellowCommercialCard;
}
