import {Component, Input} from '@angular/core';
import {NavigationService} from "../../../shared/services/navigation/navigation.service";

@Component({
  selector: 'duel-room-uid-label',
  templateUrl: './room-uid-label.component.html',
  styleUrls: ['./room-uid-label.component.scss']
})
export class RoomUidLabelComponent {
  @Input() uid!: string;

  public copiedSuccessfully = false;

  public constructor(
    private navigationService: NavigationService,
  ) { }

  public copyToClipboard(): void {
    navigator.clipboard.writeText(this.navigationService.getFullPath())
      .then(() => {
        this.copiedSuccessfully = true;

        setTimeout(() => {
          this.copiedSuccessfully = false;
        }, 2000);
      })
  }
}
