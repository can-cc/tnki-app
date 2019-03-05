import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import { tap } from 'rxjs/operators';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogin$: Subject<boolean> = new Subject();

  constructor(private httpClient: HttpClient, private storageService: StorageService) {}

  public login(email: string, password: string): Observable<HttpResponse<{}>> {
    return this.httpClient
      .post(`${environment.apiEndPoinit}/signin`, { email, password }, { observe: 'response' })
      .pipe(
        tap((response: HttpResponse<{}>) => {
          this.storageService.set('jwt', response.headers.get('jwt'));
          this.storageService.set('userId', response.headers.get('user-id'));

          this.isLogin$.next(true);
        })
      );
  }
}
