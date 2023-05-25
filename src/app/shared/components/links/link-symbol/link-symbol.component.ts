import {Component, Input} from '@angular/core';
import {LinkSymbol} from "../../../../../model/card.model";

@Component({
  selector: 'duel-link-symbol',
  templateUrl: './link-symbol.component.html',
  styleUrls: ['./link-symbol.component.scss']
})
export class LinkSymbolComponent {
  @Input() linkSymbol!: LinkSymbol;
  @Input() size!: 'LARGE' | 'SMALL';

  public get assetPath(): string {
    return `assets/link/${this.linkSymbol.toLowerCase()}.png`;
  }
}
