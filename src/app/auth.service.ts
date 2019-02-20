import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogin: Subject<void> = new Subject();

  constructor(private httpClient: HttpClient) {}

  public login(email: string, password: string) {
    this.httpClient
      .post(
        `${environment.apiEndPoinit}/signin`,
        { email, password },
        {
          observe: 'body'
        }
      )
      .subscribe((response: any) => {
        console.log(response);
        // setJwt(response.headers.jwt);
        //   setUserId(response.headers['user-id']);
        //   Message.success('Sign in sccuess');
      });
  }
}
