import { Injectable } from '@angular/core';
import { map, Observable, of, Subject } from 'rxjs';
import { WebSocketService } from '../web-socket/web-socket.service';
import { RestService } from '../rest/rest.service';
import { Room } from '../../../../model/room';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(
    private webSocketService: WebSocketService,
    private restService: RestService<Room>,
  ) {}

  public joinRoom(
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
      of(false),
    );

    conn.subscribe({
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
      },
    });
  }

  public createRoom(): Observable<string> {
    return this.restService
      .get('create')
      .pipe(map((room: Room): string => room.uid));
  }
}
