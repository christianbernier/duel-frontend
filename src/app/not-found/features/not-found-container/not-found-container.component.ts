import { Component } from '@angular/core';
import {NavigationService} from "../../../shared/services/navigation/navigation.service";

@Component({
  selector: 'duel-not-found-container',
  templateUrl: './not-found-container.component.html',
  styleUrls: ['./not-found-container.component.scss']
})
export class NotFoundContainerComponent {

  public constructor(
    private navigationService: NavigationService,
  ) { }

  public goHome(): void {
    this.navigationService.goTo('/')
  }
}
