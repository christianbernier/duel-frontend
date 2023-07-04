import {Component, Input, OnInit} from '@angular/core';
import {RoomFacade} from "../../store";
import {Card} from "../../../../model/card.model";
import {ActivatedRoute} from "@angular/router";
import {NavigationService} from "../../../shared/services/navigation/navigation.service";

@Component({
  selector: 'duel-room-container',
  templateUrl: './room-container.component.html',
  styleUrls: ['./room-container.component.scss']
})
export class RoomContainerComponent implements OnInit {
  // @Input() uid = 'test';
  // nameInProgress = 'Christian';
  // name = 'Christian';
  @Input() uid = '';
  nameInProgress = '';
  name = '';

  constructor(
    private route: ActivatedRoute,
    public roomFacade: RoomFacade,
    public navigationService: NavigationService,
  ) {}

  public ngOnInit(): void {
    const uid = this.route.snapshot.paramMap.get('uid');
    if (uid) {
      this.uid = uid;
    } else {
      this.navigationService.goHome();
    }
  }

  public nameChanged(name: string): void {
    this.nameInProgress = name;
  }

  public nameEntered(): void {
    if (this.nameInProgress) {
      this.name = this.nameInProgress;
      this.joinRoom();
    }
  }

  public joinRoom() {
    this.roomFacade.joinRoom(this.uid, this.name);
  }

  public startGame() {
    this.roomFacade.sendMessage({
      type: 'START_GAME',
    })
  }
}
