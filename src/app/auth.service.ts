import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import { tap } from 'rxjs/operators';
import { StorageService } from './storage.service';
import { API_ENDPOINT } from '../constant/api';

const JWT_STORAGE_KEY = 'jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogin$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient, private storageService: StorageService) {}

  public login(email: string, password: string): Observable<HttpResponse<{}>> {
    return this.httpClient
      .post(`${API_ENDPOINT}/signin`, { email, password }, { observe: 'response' })
      .pipe(
        tap((response: HttpResponse<{}>) => {
          this.storageService.set(JWT_STORAGE_KEY, response.headers.get('jwt'));
          this.storageService.set('userId', response.headers.get('user-id'));

          this.isLogin$.next(true);
        })
      );
  }

  public initAuth(): void {
    const jwt: string = this.storageService.get(JWT_STORAGE_KEY);
    this.isLogin$.next(!!jwt);
  }
}
