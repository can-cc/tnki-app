import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authSevice: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin();
  }

  private checkLogin(): Observable<boolean> {
    console.log('checkloging');
    return this.authSevice.isLogin$.pipe(
      take(1),
      tap((isLogin: boolean) => {
        console.log('isLogin', isLogin);
        if (!isLogin) {
          this.router.navigate(['/login']);
        }
      })
    );
  }
}
