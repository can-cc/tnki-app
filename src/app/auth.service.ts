import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogin: Subject<void> = new Subject();

  constructor(private httpClient: HttpClient) {}

  public login() {}
}
