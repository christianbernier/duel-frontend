import { Injectable } from '@angular/core';
import {catchError, map, Observable, of, Subject} from "rxjs";
import {WebSocketService} from "../web-socket/web-socket.service";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(
    private webSocketService: WebSocketService,
  ) { }

  public joinRoom (
    roomUid: string,
    name: string,
    onMessage: (message: object) => void,
    onError: (error: Error) => void,
    sendMessage: Subject<object>,
  ) {
    const url = `ws://localhost:8080/join?room=${roomUid}&name=${name}`;

    const conn = this.webSocketService.connect<object>(
      url,
      sendMessage,
      of(false)
    );

    conn
      .subscribe({
        next: (message: object): void => {
          onMessage(message);
        },
        error: (err): void => {
          if (err?.message) {
            onError(err);
          } else {
            onError(new Error('Unknown error.'));
          }
        },
        complete: (): void => {
          onError(new Error('Connection closed.'));
        }
      }
    )
  }
}
