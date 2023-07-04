import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {fromPromise} from "rxjs/internal/observable/innerFrom";
import axios from "axios";

export const BASE_URL = 'http://localhost:8081';

export interface IRestService<T> {
  get(path: string, headers?: object): Observable<T>;
  post(path: string, body: object, headers?: object): Observable<T>;
}

@Injectable({
  providedIn: 'root'
})
export class RestService<T> implements IRestService<T> {
  private readonly DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    'Accept': '*/*'
  }

  get(path: string, headers?: object): Observable<T> {
    return fromPromise(axios.get<T>(`${BASE_URL}/${path}`, {
      headers: {
        ...this.DEFAULT_HEADERS,
        ...headers,
      },
    }).then(data => data.data));
  }

  post(path: string, body: object, headers?: object): Observable<T> {
    return fromPromise(axios.post<T>(`${BASE_URL}/${path}`, body, {
      headers,
    }).then(data => data.data));
  }

}
