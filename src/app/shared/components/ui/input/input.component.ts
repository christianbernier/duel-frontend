import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'duel-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Output() textChanged: EventEmitter<string>;

  public constructor() {
    this.textChanged = new EventEmitter();
  }

  public changed(event: Event): void {
    if (!event || !event.target) {
      this.textChanged.emit('');
      return;
    }

    const target = event.target as HTMLInputElement;
    this.textChanged.emit(target.value);
  }
}
