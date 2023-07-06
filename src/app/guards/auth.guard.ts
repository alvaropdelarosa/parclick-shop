import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { createUserFixture } from '../models/fixture';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(
    public auth: UserService,
    public router: Router
  ) { }

  canActivate(): boolean | Observable<boolean> {
    const token = this.auth.getAccessToken();

    if (!token) {
      return this.handleNotLogged();
    }

    if (!this.auth.isAuthenticated()) {
      return this.autoLogin();
    }

    return true;
  }

  handleNotLogged(): boolean {
    this.auth.clear();
    this.router.navigate(['login']);
    alert('Por favor, inice sesión');
    return false;
  }

  autoLogin(): Observable<boolean> {
    return new Observable<boolean>(obs => {
      this.auth.getUserByToken()
        .subscribe({
          next: (value) => {
            if (!value) {
              this.auth.clear();
              this.router.navigate(['login']);
              return obs.next(false);
            }
            this.auth.setUser(value);
            obs.next(true);
          },
          error: (err) => {
            this.auth.clear();
            this.router.navigate(['login']);
            obs.next(false);
          }
        });
    });
  }
}
