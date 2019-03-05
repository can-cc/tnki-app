import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  public get(key: string): string {
    return window.localStorage.getItem(key);
  }

  public set(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }
}
