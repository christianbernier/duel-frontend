import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  public connect<T>(
    url: string,
    send: Observable<T>,
    close: Observable<boolean>,
  ): Observable<T> {
    let conn: WebSocketSubject<T>;

    try {
      conn = webSocket<T>(url);
    } catch (e) {
      throw new Error('Cannot connect to WebSocket.');
    }

    // When a message is sent, forward it to the connection.
    send.pipe().subscribe((message: T): void => {
      conn.next(message);
    });

    close.pipe().subscribe((shouldClose: boolean): void => {
      if (shouldClose) {
        conn.complete();
      }
    });

    return conn.pipe();
  }
}
