import { Component, Input } from '@angular/core';
import { Resource } from '../../../model/resource.model';
import { LinkSymbol } from '../../../model/card.model';

@Component({
  selector: 'duel-card-payment',
  templateUrl: './card-payment.component.html',
  styleUrls: ['./card-payment.component.scss'],
})
export class CardPaymentComponent {
  @Input() coinCost = 0;
  @Input() resourceCost: Resource[] = [];
  @Input() linkSymbol?: LinkSymbol;
}
