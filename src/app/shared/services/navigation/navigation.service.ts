import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public getPath(): string {
    return window.location.pathname;
  }

  public getFullPath(): string {
    return window.location.href;
  }

  public goTo(path: string): void {
    window.location.assign(path);
  }

  public goHome(): void {
    this.goTo('/')
  }
}
