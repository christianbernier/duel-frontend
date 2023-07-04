import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'duel-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() shown?: boolean = true;
  @Input() canCancel?: boolean = true;

  @Input() title!: string;
  @Input() content!: TemplateRef<unknown>;
  @Input() cancelButtonText!: string;
  @Input() submitButtonText!: string;

  @Output() onCancel: EventEmitter<void>;
  @Output() onSubmit: EventEmitter<void>;

  public constructor() {
    this.onCancel = new EventEmitter();
    this.onSubmit = new EventEmitter();
  }

  public cancel(): void {
    this.onCancel.emit();
  }

  public submit(): void {
    this.onSubmit.emit();
  }
}
