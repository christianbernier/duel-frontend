import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconName } from '@ng-icons/core';

@Component({
  selector: 'duel-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() type!: 'PRIMARY' | 'SECONDARY';

  @Input() disabled?: boolean = false;
  @Input() icon?: IconName;

  @Output() onClick: EventEmitter<void>;

  public constructor() {
    this.onClick = new EventEmitter();
  }
}
