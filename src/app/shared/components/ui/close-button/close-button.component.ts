import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'duel-close-button',
  templateUrl: './close-button.component.html',
  styleUrls: ['./close-button.component.scss']
})
export class CloseButtonComponent {
  @Output() closeClicked: EventEmitter<void>;

  public constructor() {
    this.closeClicked = new EventEmitter();
  }
}
