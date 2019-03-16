import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';
import { StorageService } from '../storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private storageService: StorageService) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwt: string = this.storageService.get('jwt');
    const newReq = jwt ?  req.clone({
      headers: req.headers.set('jwt', jwt)
    }) : req.clone();
    return next.handle(newReq);
  }
}
