import { Component, Input } from '@angular/core';
import { ScienceProgressToken } from '../../../../../model/science.model';

@Component({
  selector: 'duel-science-token',
  templateUrl: './science-token.component.html',
  styleUrls: ['./science-token.component.scss'],
})
export class ScienceTokenComponent {
  @Input() type!: ScienceProgressToken;

  @Input() size!: 'LARGE' | 'SMALL';

  public get assetPath(): string {
    return `assets/science/tokens/${this.type.toLowerCase()}.png`;
  }
}
